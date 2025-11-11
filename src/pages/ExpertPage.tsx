import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Calendar, MessageSquare, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const SAMPLE_EXPERTS = [
  {
    name: "Rohan Patel",
    title: "Senior Data Analyst",
    company: "Google",
    expertise: ["Data Analytics", "Machine Learning", "Python"],
    rating: 4.9,
    sessions: 127,
    bio: "10+ years of experience in data analytics with focus on machine learning and business intelligence."
  },
  {
    name: "Ananya Sen",
    title: "Digital Marketing Lead",
    company: "Meta",
    expertise: ["Digital Marketing", "SEO", "Content Strategy"],
    rating: 4.8,
    sessions: 94,
    bio: "Marketing expert specializing in growth strategies and data-driven campaign optimization."
  },
  {
    name: "Michael Chen",
    title: "Principal Software Engineer",
    company: "Microsoft",
    expertise: ["Software Development", "Cloud Architecture", "Leadership"],
    rating: 5.0,
    sessions: 156,
    bio: "Leading engineering teams for 12+ years with expertise in scalable systems and cloud technologies."
  },
  {
    name: "Priya Sharma",
    title: "UX Design Director",
    company: "Adobe",
    expertise: ["UX Design", "Product Strategy", "Design Systems"],
    rating: 4.9,
    sessions: 83,
    bio: "Award-winning designer with passion for creating user-centered digital experiences."
  },
  {
    name: "David Kim",
    title: "VP of Product Management",
    company: "Amazon",
    expertise: ["Product Management", "Strategy", "Agile"],
    rating: 4.7,
    sessions: 112,
    bio: "Product leader with track record of launching successful products used by millions."
  },
  {
    name: "Sarah Johnson",
    title: "HR & Career Coach",
    company: "LinkedIn",
    expertise: ["Career Development", "Resume Building", "Interview Prep"],
    rating: 4.9,
    sessions: 203,
    bio: "Helping professionals navigate career transitions and achieve their goals for 8+ years."
  }
];

export function ExpertPage() {
  return (
    <div className="section-padding">
      <div className="container max-w-6xl">
        {/* Back Button */}
        <Link
          to="/results"
          className="inline-flex items-center gap-2 text-[#555555] hover:text-[#3A0CA3] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Results
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-4">
            Connect with Industry Experts
          </h1>
          <p className="text-lg text-[#555555]">
            Get personalized career advice and mentorship from experienced professionals 
            in your target field.
          </p>
        </div>

        {/* Feature Banner */}
        <div 
          className="bg-gradient-to-r from-[#F72585] to-[#F4A261] p-6 rounded-xl text-white mb-8"
          role="status"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                🚀 Feature Under Development
              </h2>
              <p className="text-white text-opacity-90">
                We're building a platform to connect you with industry mentors for 1-on-1 career guidance. 
                Soon you'll be able to book consultations, schedule sessions, and get personalized advice 
                from experts in your field.
              </p>
            </div>
          </div>
        </div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_EXPERTS.map((expert, index) => (
            <ExpertCard key={index} expert={expert} />
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12">
          <div 
            className="bg-white p-8 rounded-xl"
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
          >
            <h2 className="text-2xl font-bold text-[#1E1E1E] mb-4">
              What to Expect
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureItem
                icon={<Calendar className="w-6 h-6" />}
                title="Flexible Scheduling"
                description="Book sessions at your convenience with our easy-to-use calendar system"
              />
              <FeatureItem
                icon={<MessageSquare className="w-6 h-6" />}
                title="1-on-1 Consultations"
                description="Get personalized advice through video calls or chat sessions"
              />
              <FeatureItem
                icon={<Briefcase className="w-6 h-6" />}
                title="Industry Insights"
                description="Learn from professionals actively working in your target field"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <Link
            to="/results"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#3A0CA3] text-white rounded-lg hover:bg-[#2E078A] transition-colors"
            style={{ boxShadow: '0 2px 8px rgba(58,12,163,0.25)' }}
          >
            Return to Analysis
          </Link>
        </div>
      </div>
    </div>
  );
}

interface ExpertCardProps {
  expert: {
    name: string;
    title: string;
    company: string;
    expertise: string[];
    rating: number;
    sessions: number;
    bio: string;
  };
}

function ExpertCard({ expert }: ExpertCardProps) {
  // Generate initials for avatar
  const initials = expert.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <article 
      className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:border-[#F72585] transition-all"
      style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
    >
      {/* Avatar */}
      <div className="flex items-start gap-4 mb-4">
        <div 
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3A0CA3] to-[#4CC9F0] flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="text-white text-xl font-bold">{initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#1E1E1E] mb-1">
            {expert.name}
          </h3>
          <p className="text-sm text-[#555555] mb-1">
            {expert.title}
          </p>
          <p className="text-sm text-[#3A0CA3] font-medium">
            {expert.company}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-[#F4A261] text-[#F4A261]" />
          <span className="font-semibold text-[#1E1E1E]">{expert.rating}</span>
        </div>
        <span className="text-[#A0A0A0]">•</span>
        <span className="text-[#555555]">{expert.sessions} sessions</span>
      </div>

      {/* Bio */}
      <p className="text-sm text-[#555555] mb-4 line-clamp-2">
        {expert.bio}
      </p>

      {/* Expertise Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {expert.expertise.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-[#F8F9FA] text-xs text-[#555555] rounded-full border border-[#E0E0E0]"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Action Button */}
      <button
        className="w-full px-4 py-2 bg-[#F8F9FA] text-[#3A0CA3] border border-[#E0E0E0] rounded-lg hover:bg-[#3A0CA3] hover:text-white hover:border-[#3A0CA3] transition-colors"
        disabled
      >
        Book Consultation
      </button>
    </article>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-[#4CC9F0] bg-opacity-10 rounded-lg flex items-center justify-center text-[#3A0CA3] mx-auto mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-[#1E1E1E] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#555555]">
        {description}
      </p>
    </div>
  );
}
