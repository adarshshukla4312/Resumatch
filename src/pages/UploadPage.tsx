import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Sparkles } from "lucide-react";

export function UploadPage() {
  const navigate = useNavigate();
  const [resumeText, setResumeText] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [errors, setErrors] = useState({ resumeText: "", jobRole: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = { resumeText: "", jobRole: "" };
    let isValid = true;

    if (!resumeText.trim()) {
      newErrors.resumeText = "Please paste your resume text";
      isValid = false;
    } else if (resumeText.trim().length < 100) {
      newErrors.resumeText = "Resume text seems too short. Please provide a complete resume.";
      isValid = false;
    }

    if (!jobRole.trim()) {
      newErrors.jobRole = "Please enter your desired job role";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Store data in sessionStorage for the analysis
      sessionStorage.setItem('resumeData', JSON.stringify({ resumeText, jobRole }));
      navigate('/analyzing');
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

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Resume Text Area */}
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
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#3A0CA3] text-white rounded-lg hover:bg-[#2E078A] transition-colors disabled:bg-[#E0E0E0] disabled:text-[#A0A0A0] disabled:cursor-not-allowed"
                style={{ boxShadow: '0 2px 8px rgba(58,12,163,0.25)' }}
                disabled={!resumeText.trim() || !jobRole.trim()}
              >
                <Sparkles className="w-5 h-5" />
                Analyze My Resume
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
