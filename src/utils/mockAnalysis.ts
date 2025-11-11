export interface AnalysisResult {
  score: number;
  summary: string;
  strengths: string[];
  improvements: string[];
  skillGaps: string[];
  needsUpskilling: boolean;
  recommendations: string[];
}

export function generateMockAnalysis(resumeText: string, jobRole: string): AnalysisResult {
  const resumeLower = resumeText.toLowerCase();
  const roleLower = jobRole.toLowerCase();

  // Calculate a mock score based on resume content
  let score = 60; // Base score

  // Check for common resume elements
  if (resumeLower.includes('experience') || resumeLower.includes('worked')) score += 5;
  if (resumeLower.includes('education') || resumeLower.includes('degree')) score += 5;
  if (resumeLower.includes('skills')) score += 5;
  if (resumeLower.includes('project')) score += 5;
  if (resumeLower.includes('achievement') || resumeLower.includes('accomplishment')) score += 5;
  if (resumeText.length > 1000) score += 5;

  // Role-specific checks
  if (roleLower.includes('engineer') || roleLower.includes('developer')) {
    if (resumeLower.includes('python') || resumeLower.includes('javascript') || resumeLower.includes('java')) score += 5;
    if (resumeLower.includes('git') || resumeLower.includes('agile')) score += 3;
  }
  
  if (roleLower.includes('market')) {
    if (resumeLower.includes('seo') || resumeLower.includes('campaign')) score += 5;
    if (resumeLower.includes('analytics') || resumeLower.includes('social media')) score += 3;
  }

  if (roleLower.includes('data')) {
    if (resumeLower.includes('sql') || resumeLower.includes('analysis')) score += 5;
    if (resumeLower.includes('visualization') || resumeLower.includes('python')) score += 3;
  }

  if (roleLower.includes('design')) {
    if (resumeLower.includes('figma') || resumeLower.includes('sketch')) score += 5;
    if (resumeLower.includes('ui') || resumeLower.includes('ux')) score += 3;
  }

  // Cap the score at 95
  score = Math.min(score, 95);

  // Generate context-aware feedback
  const strengths: string[] = [
    `Strong alignment with ${jobRole} role requirements`,
    "Clear presentation of professional experience",
    "Demonstrates relevant technical competencies"
  ];

  if (resumeLower.includes('lead') || resumeLower.includes('manage')) {
    strengths.push("Shows leadership and team management experience");
  }

  if (resumeLower.includes('certification') || resumeLower.includes('certified')) {
    strengths.push("Professional certifications add credibility");
  }

  const improvements: string[] = [
    "Add quantifiable achievements with specific metrics (e.g., 'increased efficiency by 30%')",
    `Include more ${jobRole}-specific keywords for better ATS compatibility`,
    "Expand on technical skills section with proficiency levels"
  ];

  if (!resumeLower.includes('achievement')) {
    improvements.push("Highlight key achievements and results in each role");
  }

  if (resumeText.length < 800) {
    improvements.push("Consider adding more detail about your responsibilities and accomplishments");
  }

  const skillGaps: string[] = [];
  const recommendations: string[] = [];

  // Role-specific skill gaps
  if (roleLower.includes('engineer') || roleLower.includes('developer')) {
    if (!resumeLower.includes('cloud') && !resumeLower.includes('aws')) {
      skillGaps.push("Cloud computing platforms (AWS, Azure, or GCP)");
      recommendations.push("Consider learning cloud technologies - highly valued in software engineering roles");
    }
    if (!resumeLower.includes('docker') && !resumeLower.includes('kubernetes')) {
      skillGaps.push("Container technologies (Docker, Kubernetes)");
    }
  }

  if (roleLower.includes('market')) {
    if (!resumeLower.includes('analytics') && !resumeLower.includes('data')) {
      skillGaps.push("Marketing analytics and data-driven decision making");
      recommendations.push("Consider courses in marketing analytics to strengthen your profile");
    }
    if (!resumeLower.includes('seo')) {
      skillGaps.push("Search Engine Optimization (SEO)");
    }
  }

  if (roleLower.includes('data')) {
    if (!resumeLower.includes('machine learning') && !resumeLower.includes('ml')) {
      skillGaps.push("Machine Learning fundamentals");
      recommendations.push("Machine learning skills are increasingly important for data roles");
    }
    if (!resumeLower.includes('tableau') && !resumeLower.includes('power bi')) {
      skillGaps.push("Data visualization tools (Tableau, Power BI)");
    }
  }

  if (skillGaps.length === 0) {
    skillGaps.push("No critical skill gaps identified");
    recommendations.push("Focus on deepening expertise in your existing skills");
  }

  return {
    score,
    summary: `Your resume demonstrates ${score >= 75 ? 'strong' : score >= 60 ? 'good' : 'moderate'} alignment with ${jobRole} roles. ${
      score >= 75 
        ? 'You have highlighted relevant experience and skills that match industry requirements.' 
        : 'There are opportunities to strengthen your resume by emphasizing role-specific achievements and technical competencies.'
    }`,
    strengths,
    improvements,
    skillGaps,
    needsUpskilling: skillGaps.length > 1 && skillGaps[0] !== "No critical skill gaps identified",
    recommendations
  };
}
