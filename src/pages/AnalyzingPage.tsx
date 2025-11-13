import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, FileSearch, Sparkles, CheckCircle } from "lucide-react";
import { supabase } from "../utils/supabaseClient";
import { generateMockAnalysis } from "../utils/mockAnalysis";

const ANALYSIS_STEPS = [
  "Parsing resume content...",
  "Analyzing skills and experience...",
  "Comparing with job role requirements...",
  "Identifying strengths and gaps...",
  "Generating personalized recommendations...",
  "Finalizing your match score..."
];

export function AnalyzingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if resume data exists
    const resumeId = sessionStorage.getItem('resumeId');
    const jobRole = sessionStorage.getItem('jobRole');
    
    if (!resumeId || !jobRole) {
      navigate('/upload');
      return;
    }

    let stepInterval: NodeJS.Timeout | null = null;
    let progressInterval: NodeJS.Timeout | null = null;
    let analysisTimer: NodeJS.Timeout | null = null;

    const processResume = async () => {
      try {
        // Fetch resume from Supabase
        console.log('Fetching resume with ID:', resumeId);
        const { data: resume, error } = await supabase
          .from('resumes')
          .select('file_content')
          .eq('id', resumeId)
          .single();

        if (error) {
          console.error('Error fetching resume:', error);
          throw error;
        }
        if (!resume) {
          console.error('Resume not found');
          navigate('/upload');
          return;
        }

        console.log('Resume fetched successfully');

        // Simulate analysis progress - update steps
        stepInterval = setInterval(() => {
          setCurrentStep((prev) => {
            if (prev < ANALYSIS_STEPS.length - 1) {
              return prev + 1;
            }
            return prev;
          });
        }, 800);

        // Simulate analysis progress - update progress bar
        progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev < 100) {
              return prev + 2;
            }
            return prev;
          });
        }, 100);

        // Generate analysis after a delay to allow animations to play
        analysisTimer = setTimeout(async () => {
          // Generate analysis
          console.log('Generating analysis for job role:', jobRole);
          const analysis = generateMockAnalysis(resume.file_content, jobRole);
          console.log('Analysis generated:', analysis);
          
          // Save analysis to Supabase
          console.log('Saving analysis to Supabase');
          
          // Use the correct column names from the database schema
          const { data: analysisResult, error: analysisError } = await supabase
            .from('analysis_results')
            .insert([
              {
                resume_id: resumeId,
                score: analysis.score,
                summary: analysis.summary,
                strengths: analysis.strengths,
                // Fix: Use the correct column name 'improvments' (typo in database)
                improvments: analysis.improvements,
                skill_gaps: analysis.skillGaps,
                recommendations: analysis.recommendations
              }
            ])
            .select()
            .single();

          if (analysisError) {
            console.error('Error saving analysis:', analysisError);
            throw analysisError;
          }

          console.log('Analysis saved successfully:', analysisResult);

          // Store analysis ID in sessionStorage
          sessionStorage.setItem('analysisId', analysisResult.id);
          console.log('Analysis ID stored in sessionStorage:', analysisResult.id);

          // Wait a bit more to ensure animations complete before navigating
          setTimeout(() => {
            // Clear intervals and navigate to results
            if (stepInterval) clearInterval(stepInterval);
            if (progressInterval) clearInterval(progressInterval);
            console.log('Navigating to results page');
            navigate('/results');
          }, 1000); // Wait an additional second after analysis is complete
        }, 5000); // Wait 5 seconds to simulate analysis time
      } catch (error) {
        console.error('Error processing resume:', error);
        // Store error in sessionStorage for debugging
        sessionStorage.setItem('analysisError', JSON.stringify(error.message || 'Unknown error'));
        
        // Clear intervals
        if (stepInterval) clearInterval(stepInterval);
        if (progressInterval) clearInterval(progressInterval);
        
        navigate('/upload');
      }
    };

    processResume();

    return () => {
      // Cleanup intervals if component unmounts
      if (stepInterval) clearInterval(stepInterval);
      if (progressInterval) clearInterval(progressInterval);
      if (analysisTimer) clearTimeout(analysisTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#F8F9FA] py-12">
      <div className="container max-w-2xl">
        <div 
          className="bg-white p-12 rounded-2xl text-center"
          style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}
        >
          {/* Animated Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div 
                className="w-24 h-24 bg-[#3A0CA3] bg-opacity-10 rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <FileSearch className="w-12 h-12 text-[#3A0CA3] animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#F72585] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-[#1E1E1E] mb-4">
            Analyzing Your Resume
          </h1>
          <p className="text-lg text-[#555555] mb-8">
            This may take a few seconds. We're using AI to evaluate your resume against your target role.
          </p>

          {/* Progress Bar */}
          <div className="mb-8">
            <div 
              className="w-full h-2 bg-[#E0E0E0] rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Analysis progress"
            >
              <div 
                className="h-full bg-gradient-to-r from-[#3A0CA3] to-[#4CC9F0] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-[#555555] mt-2">
              {progress}% Complete
            </p>
          </div>

          {/* Status Messages */}
          <div className="space-y-3">
            {ANALYSIS_STEPS.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                  index === currentStep
                    ? 'bg-[#4CC9F0] bg-opacity-10 border border-[#4CC9F0]'
                    : index < currentStep
                    ? 'bg-[#2ECC71] bg-opacity-10'
                    : 'bg-transparent'
                }`}
              >
                <div className="flex-shrink-0">
                  {index < currentStep ? (
                    <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
                  ) : index === currentStep ? (
                    <Loader2 className="w-5 h-5 text-[#3A0CA3] animate-spin" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-[#E0E0E0] rounded-full" />
                  )}
                </div>
                <p 
                  className={`text-sm text-left ${
                    index <= currentStep ? 'text-[#1E1E1E]' : 'text-[#A0A0A0]'
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Cancel Button */}
          <button
            onClick={() => navigate('/upload')}
            className="mt-8 text-[#555555] hover:text-[#3A0CA3] transition-colors"
          >
            Cancel Analysis
          </button>
        </div>

        {/* Background decorative elements */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-[#4CC9F0] rounded-full opacity-10 blur-3xl -z-10"
          aria-hidden="true"
        />
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#F72585] rounded-full opacity-10 blur-3xl -z-10"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}