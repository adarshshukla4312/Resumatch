import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle, AlertCircle, TrendingUp, BookOpen, Users, Download, RotateCcw } from "lucide-react";
import { ScoreMeter } from "../components/ScoreMeter";
import { generateMockAnalysis, AnalysisResult } from "../utils/mockAnalysis";

export function ResultsPage() {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [jobRole, setJobRole] = useState("");

  useEffect(() => {
    const data = sessionStorage.getItem('resumeData');
    if (!data) {
      navigate('/upload');
      return;
    }

    const { resumeText, jobRole: role } = JSON.parse(data);
    setJobRole(role);
    
    // Generate mock analysis
    const result = generateMockAnalysis(resumeText, role);
    setAnalysis(result);
  }, [navigate]);

  const handleDownloadReport = () => {
    if (!analysis) return;

    const reportContent = `
RESUMATCH ANALYSIS REPORT
Generated on: ${new Date().toLocaleDateString()}
Target Role: ${jobRole}

MATCH SCORE: ${analysis.score}/100

SUMMARY:
${analysis.summary}

STRENGTHS:
${analysis.strengths.map((s, i) => `${i + 1}. ${s}`).join('\n')}

AREAS FOR IMPROVEMENT:
${analysis.improvements.map((s, i) => `${i + 1}. ${s}`).join('\n')}

SKILL GAPS:
${analysis.skillGaps.map((s, i) => `${i + 1}. ${s}`).join('\n')}

RECOMMENDATIONS:
${analysis.recommendations.map((s, i) => `${i + 1}. ${s}`).join('\n')}

---
Powered by ResuMatch AI
    `.trim();

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ResuMatch-Analysis-${jobRole.replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-[#3A0CA3] border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-[#555555]">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-[#F8F9FA]">
      <div className="container max-w-6xl">
        {/* Header Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-2">
              Your Resume Analysis
            </h1>
            <p className="text-[#555555]">
              For: <span className="font-semibold text-[#3A0CA3]">{jobRole}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleDownloadReport}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E0E0E0] text-[#3A0CA3] rounded-lg hover:bg-[#F8F9FA] transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Report
            </button>
            <Link
              to="/upload"
              className="flex items-center gap-2 px-4 py-2 bg-[#4CC9F0] text-white rounded-lg hover:bg-[#3BA9D0] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Re-analyze
            </Link>
          </div>
        </div>

        {/* Score Card */}
        <div 
          className="bg-white p-8 rounded-xl mb-8"
          style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <ScoreMeter score={analysis.score} label="Your Resume Match" />
            
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-[#1E1E1E] mb-3">
                Analysis Summary
              </h2>
              <p className="text-[#555555] leading-relaxed">
                {analysis.summary}
              </p>
              
              {analysis.needsUpskilling && (
                <div 
                  className="mt-4 p-4 bg-[#F4A261] bg-opacity-10 border border-[#F4A261] rounded-lg"
                  role="alert"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-[#F4A261] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#1E1E1E] mb-1">
                        Upskilling Recommended
                      </p>
                      <p className="text-sm text-[#555555]">
                        We've identified some skill gaps. Consider taking courses to strengthen your profile.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Strengths and Improvements */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Strengths */}
          <div 
            className="bg-white p-6 rounded-xl"
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#2ECC71] bg-opacity-10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#2ECC71]" />
              </div>
              <h2 className="text-xl font-semibold text-[#1E1E1E]">
                Strong Points
              </h2>
            </div>
            <ul className="space-y-3">
              {analysis.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#2ECC71] mt-1 flex-shrink-0" aria-hidden="true">✓</span>
                  <span className="text-[#555555]">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Improvements */}
          <div 
            className="bg-white p-6 rounded-xl"
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#2196F3] bg-opacity-10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-[#1E1E1E]">
                Points to Improve
              </h2>
            </div>
            <ul className="space-y-3">
              {analysis.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#2196F3] mt-1 flex-shrink-0" aria-hidden="true">→</span>
                  <span className="text-[#555555]">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skill Gaps */}
        <div 
          className="bg-white p-6 rounded-xl mb-8"
          style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#F72585] bg-opacity-10 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-[#F72585]" />
            </div>
            <h2 className="text-xl font-semibold text-[#1E1E1E]">
              Identified Skill Gaps
            </h2>
          </div>
          <ul className="space-y-2 mb-4">
            {analysis.skillGaps.map((gap, index) => (
              <li key={index} className="flex items-center gap-2 text-[#555555]">
                <span className="w-2 h-2 bg-[#F72585] rounded-full" aria-hidden="true" />
                {gap}
              </li>
            ))}
          </ul>
          {analysis.recommendations.length > 0 && (
            <div className="pt-4 border-t border-[#E0E0E0]">
              <p className="font-semibold text-[#1E1E1E] mb-2">Recommendations:</p>
              <ul className="space-y-2">
                {analysis.recommendations.map((rec, index) => (
                  <li key={index} className="text-[#555555] text-sm">
                    • {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/upskill"
            className="bg-gradient-to-br from-[#3A0CA3] to-[#4CC9F0] p-6 rounded-xl text-white hover:shadow-lg transition-all"
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  View Courses to Upskill
                </h3>
                <p className="text-white text-opacity-90 mb-3">
                  Discover personalized learning paths to bridge your skill gaps and boost your career prospects.
                </p>
                <span className="inline-flex items-center text-sm font-semibold">
                  Explore Courses →
                </span>
              </div>
            </div>
          </Link>

          <Link
            to="/expert"
            className="bg-gradient-to-br from-[#F72585] to-[#F4A261] p-6 rounded-xl text-white hover:shadow-lg transition-all"
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Talk to Industry Expert
                </h3>
                <p className="text-white text-opacity-90 mb-3">
                  Get personalized career advice from experienced professionals in your target field.
                </p>
                <span className="inline-flex items-center text-sm font-semibold">
                  Connect with Experts →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
