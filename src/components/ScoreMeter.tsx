interface ScoreMeterProps {
  score: number;
  label: string;
}

export function ScoreMeter({ score, label }: ScoreMeterProps) {
  const getScoreColor = (score: number) => {
    if (score >= 85) return { bg: '#2ECC71', text: 'Excellent', ring: 'rgba(46,204,113,0.2)' };
    if (score >= 70) return { bg: '#4CC9F0', text: 'Very Good', ring: 'rgba(76,201,240,0.2)' };
    if (score >= 55) return { bg: '#2196F3', text: 'Good', ring: 'rgba(33,150,243,0.2)' };
    if (score >= 40) return { bg: '#F4A261', text: 'Okay', ring: 'rgba(244,162,97,0.2)' };
    return { bg: '#E63946', text: 'Needs Improvement', ring: 'rgba(230,57,70,0.2)' };
  };

  const scoreData = getScoreColor(score);
  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48">
        <svg className="transform -rotate-90 w-48 h-48" aria-hidden="true">
          {/* Background circle */}
          <circle
            cx="96"
            cy="96"
            r="70"
            stroke="#E0E0E0"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="96"
            cy="96"
            r="70"
            stroke={scoreData.bg}
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 1s ease-in-out',
            }}
          />
        </svg>
        
        {/* Score text in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span 
            className="text-5xl font-bold"
            style={{ color: scoreData.bg }}
            aria-label={`Score: ${score} out of 100`}
          >
            {score}
          </span>
          <span className="text-sm text-[#555555]">out of 100</span>
        </div>
      </div>

      {/* Label and rating */}
      <div className="mt-4 text-center">
        <p className="text-sm text-[#555555] mb-1">{label}</p>
        <div 
          className="inline-flex items-center px-4 py-2 rounded-full"
          style={{ 
            backgroundColor: scoreData.ring,
            color: scoreData.bg,
          }}
        >
          <span className="font-semibold">{scoreData.text}</span>
        </div>
      </div>
    </div>
  );
}
