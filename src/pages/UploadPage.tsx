import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Sparkles, Upload, File } from "lucide-react";
import { supabase } from "../utils/supabaseClient";
import { extractTextFromFile } from "../utils/fileProcessor";

export function UploadPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resumeText, setResumeText] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState({ resumeText: "", jobRole: "", file: "" });
  const [activeTab, setActiveTab] = useState<"text" | "file">("text");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      const validTypes = ['text/plain', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(selectedFile.type)) {
        setErrors(prev => ({ ...prev, file: "Please upload a TXT, PDF, or DOCX file" }));
        return;
      }
      
      // Validate file size (5MB limit)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, file: "File size must be less than 5MB" }));
        return;
      }
      
      setFile(selectedFile);
      setErrors(prev => ({ ...prev, file: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = { resumeText: "", jobRole: "", file: "" };
    let isValid = true;

    if (activeTab === "text") {
      if (!resumeText.trim()) {
        newErrors.resumeText = "Please paste your resume text";
        isValid = false;
      } else if (resumeText.trim().length < 100) {
        newErrors.resumeText = "Resume text seems too short. Please provide a complete resume.";
        isValid = false;
      }
    } else {
      if (!file) {
        newErrors.file = "Please select a file";
        isValid = false;
      }
    }

    if (!jobRole.trim()) {
      newErrors.jobRole = "Please enter your desired job role";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsUploading(true);
      
      try {
        let finalResumeText = resumeText;
        
        // If uploading a file, extract text content
        if (activeTab === "file" && file) {
          finalResumeText = await extractTextFromFile(file);
        }
        
        // Prepare resume data - provide values for all not-null columns
        const resumeData: any = {
          file_name: file?.name || 'pasted_text',
          file_type: file?.type || 'text/plain',
          file_content: finalResumeText,
          file_url: '', // Empty string as placeholder
          job_role: jobRole
          // user_id is nullable, so we don't need to include it
          // id and created_at are auto-generated
        };
        
        // Upload to Supabase
        const { data, error: resumeError } = await supabase
          .from('resumes')
          .insert([resumeData])
          .select()
          .single();

        if (resumeError) {
          console.error('Supabase error:', resumeError);
          // Provide more specific error handling
          if (resumeError.code === '23502') { // not_null_violation
            throw new Error(`Database configuration error: ${resumeError.message}`);
          }
          throw new Error(`Database error: ${resumeError.message}`);
        }

        // Store resume ID in sessionStorage for later analysis
        sessionStorage.setItem('resumeId', data.id);
        sessionStorage.setItem('jobRole', jobRole);
        
        navigate('/analyzing');
      } catch (error: any) {
        console.error('Error uploading resume:', error);
        let errorMessage = "Failed to upload resume. Please try again.";
        
        if (error.message) {
          errorMessage = error.message;
        } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
          errorMessage = "Network error. Please check your internet connection and try again.";
        }
        
        setErrors(prev => ({ ...prev, file: errorMessage }));
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div className="section-padding">
      <div className="container max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#555555]">
            <li>
              <a href="/" className="hover:text-[#3A0CA3] transition-colors">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[#3A0CA3]">
              Upload Resume
            </li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-4">
                Upload Your Resume
              </h1>
              <p className="text-lg text-[#555555]">
                We'll analyze it against your desired job role and give you instant insights.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex mb-6 border-b border-[#E0E0E0]">
              <button
                type="button"
                onClick={() => setActiveTab("text")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "text"
                    ? "text-[#3A0CA3] border-b-2 border-[#3A0CA3]"
                    : "text-[#555555] hover:text-[#3A0CA3]"
                }`}
              >
                Paste Text
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("file")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "file"
                    ? "text-[#3A0CA3] border-b-2 border-[#3A0CA3]"
                    : "text-[#555555] hover:text-[#3A0CA3]"
                }`}
              >
                Upload File
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Text Paste Area */}
              {activeTab === "text" && (
                <div>
                  <label 
                    htmlFor="resumeText" 
                    className="block font-medium text-[#1E1E1E] mb-2"
                  >
                    Paste Your Resume <span className="text-[#E63946]">*</span>
                  </label>
                  <textarea
                    id="resumeText"
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    placeholder="Copy and paste your resume content here..."
                    rows={12}
                    className={`w-full px-4 py-3 border rounded-lg bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#4CC9F0] focus:ring-opacity-30 ${
                      errors.resumeText ? 'border-[#E63946]' : 'border-[#E0E0E0]'
                    }`}
                    aria-describedby={errors.resumeText ? "resume-error" : undefined}
                    aria-invalid={!!errors.resumeText}
                  />
                  {errors.resumeText && (
                    <p id="resume-error" className="mt-2 text-sm text-[#E63946]" role="alert">
                      {errors.resumeText}
                    </p>
                  )}
                </div>
              )}

              {/* File Upload Area */}
              {activeTab === "file" && (
                <div>
                  <label className="block font-medium text-[#1E1E1E] mb-2">
                    Upload Your Resume <span className="text-[#E63946]">*</span>
                  </label>
                  <div 
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                      errors.file 
                        ? 'border-[#E63946] bg-[#FEEFEE]' 
                        : 'border-[#E0E0E0] hover:border-[#3A0CA3] hover:bg-[#F8F9FA]'
                    }`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".txt,.pdf,.docx"
                      className="hidden"
                      aria-describedby={errors.file ? "file-error" : undefined}
                      aria-invalid={!!errors.file}
                    />
                    <Upload className="w-12 h-12 mx-auto text-[#3A0CA3] mb-4" />
                    <p className="font-medium text-[#1E1E1E] mb-1">
                      {file ? file.name : "Click to upload resume"}
                    </p>
                    <p className="text-sm text-[#555555]">
                      Supports TXT, PDF, DOCX files (Max 5MB)
                    </p>
                  </div>
                  {errors.file && (
                    <p id="file-error" className="mt-2 text-sm text-[#E63946]" role="alert">
                      {errors.file}
                    </p>
                  )}
                  {file && (
                    <div className="mt-3 flex items-center text-sm text-[#555555]">
                      <File className="w-4 h-4 mr-2" />
                      <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                    </div>
                  )}
                </div>
              )}

              {/* Job Role Input */}
              <div>
                <label 
                  htmlFor="jobRole" 
                  className="block font-medium text-[#1E1E1E] mb-2"
                >
                  Desired Job Role <span className="text-[#E63946]">*</span>
                </label>
                <input
                  type="text"
                  id="jobRole"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  placeholder="e.g., Software Engineer, Marketing Manager"
                  className={`w-full px-4 py-3 border rounded-lg bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#4CC9F0] focus:ring-opacity-30 ${
                    errors.jobRole ? 'border-[#E63946]' : 'border-[#E0E0E0]'
                  }`}
                  aria-describedby={errors.jobRole ? "role-error" : undefined}
                  aria-invalid={!!errors.jobRole}
                />
                {errors.jobRole && (
                  <p id="role-error" className="mt-2 text-sm text-[#E63946]" role="alert">
                    {errors.jobRole}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isUploading || (activeTab === "text" ? !resumeText.trim() : !file) || !jobRole.trim()}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#3A0CA3] text-white rounded-lg hover:bg-[#2E078A] transition-colors disabled:bg-[#E0E0E0] disabled:text-[#A0A0A0] disabled:cursor-not-allowed"
                style={{ boxShadow: '0 2px 8px rgba(58,12,163,0.25)' }}
              >
                {isUploading ? (
                  <>
                    <Sparkles className="w-5 h-5 text-white animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-white" />
                    Analyze My Resume
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Tips Section */}
          <div className="lg:sticky lg:top-24">
            <div 
              className="bg-white p-6 rounded-xl border border-[#E0E0E0]"
              style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[#4CC9F0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#3A0CA3]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1E1E1E] mb-1">
                    Tips for Best Results
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 text-[#555555]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2ECC71] mt-1" aria-hidden="true">✓</span>
                  <span>Include your complete resume text with all sections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2ECC71] mt-1" aria-hidden="true">✓</span>
                  <span>Make sure to include work experience, skills, and education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2ECC71] mt-1" aria-hidden="true">✓</span>
                  <span>Be specific about your target job role (e.g., "Senior Frontend Developer" instead of just "Developer")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2ECC71] mt-1" aria-hidden="true">✓</span>
                  <span>Keep formatting simple - plain text works best</span>
                </li>
              </ul>
            </div>

            {/* Info Banner */}
            <div 
              className="mt-6 bg-[#4CC9F0] bg-opacity-10 p-4 rounded-lg border border-[#4CC9F0]"
              role="note"
            >
              <p className="text-sm text-[#1E1E1E]">
                <strong>Privacy Note:</strong> Your resume data is processed securely and 
                is not stored permanently. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}