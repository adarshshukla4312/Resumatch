import React from "react";
import { Link } from "react-router-dom";
import { Target, Zap, Users, TrendingUp, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
            About ResuMatch
          </h1>
          <p className="text-xl text-[#555555] leading-relaxed">
            ResuMatch is an AI-driven platform that helps individuals understand how 
            job-ready their resumes are. We provide instant, actionable insights to help 
            you land your dream job.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
                Our Mission
              </h2>
              <p className="text-[#555555] mb-4 leading-relaxed">
                Job seekers often don't know whether their resume aligns with their target role. 
                They fail to identify missing keywords, required skills, or improvement areas, 
                leading to countless rejections and frustration.
              </p>
              <p className="text-[#555555] leading-relaxed">
                ResuMatch solves this by providing instant AI-powered analysis that compares 
                your resume with your desired job role, identifies gaps, and suggests concrete 
                steps for improvement. We're here to help you prepare strategically for your 
                dream career.
              </p>
            </div>
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518731027-78a22c8852ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwYWNoaWV2ZW1lbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjI3NjAyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Success and achievement"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
              How ResuMatch Works
            </h2>
            <p className="text-lg text-[#555555]">
              Our AI-powered platform analyzes your resume in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number="1"
              icon={<Target className="w-6 h-6 text-white" />}
              title="Input & Analysis"
              description="Paste your resume and tell us your target job role. Our AI immediately begins analyzing your content against industry standards."
            />
            <ProcessStep
              number="2"
              icon={<Zap className="w-6 h-6 text-white" />}
              title="AI Evaluation"
              description="Advanced algorithms compare your resume with job requirements, identifying strengths, weaknesses, and skill gaps in real-time."
            />
            <ProcessStep
              number="3"
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              title="Get Insights"
              description="Receive a detailed match score, structured feedback, and personalized recommendations to improve your resume."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
              What We Offer
            </h2>
          </div>

          <div className="space-y-6">
            <FeatureRow
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              title="AI-Powered Resume Evaluation"
              description="Get instant analysis of your resume's relevance to your target job role with detailed scoring."
            />
            <FeatureRow
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              title="Skill Gap Detection"
              description="Identify missing or weak skills that are essential for your desired position."
            />
            <FeatureRow
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              title="Actionable Feedback"
              description="Receive specific recommendations on how to improve your resume and boost your job readiness."
            />
            <FeatureRow
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              title="Upskilling Recommendations"
              description="Discover courses and learning paths to bridge skill gaps (coming soon)."
            />
            <FeatureRow
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              title="Expert Consultation"
              description="Connect with industry professionals for personalized career advice (coming soon)."
            />
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="section-padding bg-gradient-to-br from-[#3A0CA3] to-[#4CC9F0] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Future Vision
          </h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            We're building a comprehensive career readiness platform that goes beyond resume analysis. 
            Our roadmap includes:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <VisionCard
              icon={<Users className="w-8 h-8" />}
              title="Mentor Network"
              description="Direct access to industry experts for personalized career guidance and interview preparation"
            />
            <VisionCard
              icon={<TrendingUp className="w-8 h-8 text-white" />}
              title="Learning Paths"
              description="Curated upskilling courses and certifications tailored to your career goals"
            />
            <VisionCard
              icon={<Target className="w-8 h-8 text-white" />}
              title="Job Matching"
              description="Smart job recommendations based on your skills and aspirations with direct application links"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#555555] mb-8">
            Take the first step toward landing your dream job. Analyze your resume now 
            and get instant insights.
          </p>
          <Link
            to="/upload"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A0CA3] text-white rounded-lg hover:bg-[#2E078A] transition-colors"
            style={{ boxShadow: '0 2px 8px rgba(58,12,163,0.25)' }}
          >
            Analyze My Resume
          </Link>
        </div>
      </section>
    </div>
  );
}

interface ProcessStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ProcessStep({ number, icon, title, description }: ProcessStepProps) {
  return (
    <article 
      className="bg-white p-6 rounded-xl text-center"
      style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
    >
      <div className="relative mb-4">
        <div 
          className="w-16 h-16 bg-[#3A0CA3] text-white rounded-full flex items-center justify-center mx-auto"
          aria-label={`Step ${number}`}
        >
          <span className="text-2xl font-bold">{number}</span>
        </div>
        <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#4CC9F0] bg-opacity-20 rounded-full flex items-center justify-center mx-auto left-1/2 transform translate-x-4">
          <div className="text-[#3A0CA3]">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-[#1E1E1E] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#555555]">
        {description}
      </p>
    </article>
  );
}

interface FeatureRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureRow({ icon, title, description }: FeatureRowProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#F8F9FA] transition-colors">
      <div className="w-10 h-10 bg-[#2ECC71] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#2ECC71]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-[#1E1E1E] mb-1">
          {title}
        </h3>
        <p className="text-[#555555]">
          {description}
        </p>
      </div>
    </div>
  );
}

interface VisionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function VisionCard({ icon, title, description }: VisionCardProps) {
  return (
    <article className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">
        {title}
      </h3>
      <p className="text-sm opacity-90">
        {description}
      </p>
    </article>
  );
}
