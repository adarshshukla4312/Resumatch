import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, FileSearch, Sparkles, CheckCircle } from "lucide-react";

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
    const data = sessionStorage.getItem('resumeData');
    if (!data) {
      navigate('/upload');
      return;
    }

    // Simulate analysis progress
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < ANALYSIS_STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 2;
        }
        return prev;
      });
    }, 100);

    // Navigate to results after analysis
    const timer = setTimeout(() => {
      navigate('/results');
    }, 5000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
      clearTimeout(timer);
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
