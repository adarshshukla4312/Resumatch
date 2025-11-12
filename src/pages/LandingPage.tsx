import { Link } from "react-router-dom";
import { CheckCircle, Target, TrendingUp, Zap, Sparkles, ArrowRight, BarChart3, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { ReactNode } from "react";

export function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-b from-white via-[#F8F9FA] to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 bg-[#4CC9F0] rounded-full opacity-5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-72 h-72 bg-[#F72585] rounded-full opacity-5 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3A0CA3] to-[#4CC9F0] bg-opacity-10 rounded-full border border-[#4CC9F0] border-opacity-30"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">AI-Powered Resume Analysis</span>
              </motion.div>

              {/* Heading */}
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E1E1E] leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Check How{" "}
                  <span className="bg-gradient-to-r from-[#3A0CA3] via-[#4CC9F0] to-[#F72585] bg-clip-text text-transparent">
                    Job-Ready
                  </span>{" "}
                  Your Resume Is
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-[#555555] leading-relaxed"
                  style={{ opacity: 1, transform: 'none' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Paste your resume, choose your dream role, and let AI evaluate your fit, 
                  highlight strengths, and show you how to improve.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/upload"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3A0CA3] text-white rounded-xl hover:bg-[#2E078A] transition-all"
                    style={{ boxShadow: '0 4px 16px rgba(58,12,163,0.3)' }}
                  >
                    <span>Get Started Free</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#3A0CA3] border-2 border-[#3A0CA3] rounded-xl hover:bg-[#3A0CA3] hover:text-white transition-all"
                  >
                    Learn More
                  </a>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex items-center gap-8 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#4CC9F0]" />
                  <div>
                    <div className="font-bold text-[#1E1E1E]">10,000+</div>
                    <div className="text-sm text-[#555555]">Users</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#2ECC71]" />
                  <div>
                    <div className="font-bold text-[#1E1E1E]">95%</div>
                    <div className="text-sm text-[#555555]">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="relative lg:h-[600px] flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758520144417-e1c432042dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN1bWUlMjBjYXJlZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyODg3MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional resume and career planning"
                  className="w-full h-auto"
                />
                {/* Floating badge */}
                <motion.div
                  className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-xl"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2ECC71] to-[#27AE60] rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#555555]">Match Score</div>
                      <div className="font-bold text-xl text-[#1E1E1E]">92%</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative floating elements */}
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#F72585] to-[#F4A261] rounded-3xl opacity-20 blur-2xl"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                aria-hidden="true"
              />
              <motion.div 
                className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-[#4CC9F0] to-[#3A0CA3] rounded-3xl opacity-20 blur-2xl"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#4CC9F0] to-transparent opacity-50" aria-hidden="true" />
        
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="px-4 py-2 bg-[#4CC9F0] bg-opacity-10 text-[#3A0CA3] rounded-full text-sm font-medium">
                Powerful Features
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
              Why Choose ResuMatch?
            </h2>
            <p className="text-xl md:text-2xl text-[#555555] leading-relaxed">
              Get AI-powered insights to transform your resume and land your dream job
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-white" />}
              title="Instant AI Analysis"
              description="Get comprehensive resume evaluation in seconds using advanced AI technology."
              index={0}
            />
            <FeatureCard
              icon={<Target className="w-6 h-6 text-white" />}
              title="Role-Specific Matching"
              description="See exactly how well your resume aligns with your target job position."
              index={1}
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              title="Skill Gap Detection"
              description="Identify missing skills and get personalized recommendations to improve."
              index={2}
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              title="Actionable Feedback"
              description="Receive detailed insights on strengths and areas that need improvement."
              index={3}
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Match Score"
              description="Get a clear relevance score from Bad to Excellent for your resume fit."
              index={4}
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6 text-white" />}
              title="Career Guidance"
              description="Access upskilling resources and expert consultation opportunities."
              index={5}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-b from-white via-[#F8F9FA] to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3A0CA3 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} aria-hidden="true" />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-[#3A0CA3] to-[#4CC9F0] bg-opacity-10 text-white rounded-full text-sm font-medium border border-[#3A0CA3] border-opacity-20">
                Simple Process
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-[#555555] leading-relaxed">
              Three simple steps to understand your resume's potential
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3A0CA3] via-[#4CC9F0] to-[#F72585] opacity-20 -translate-y-1/2" aria-hidden="true" />
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <StepCard
                number="1"
                title="Paste Your Resume"
                description="Copy and paste your resume text into our secure platform."
                index={0}
              />
              <StepCard
                number="2"
                title="Enter Target Role"
                description="Tell us the job position you're aiming for."
                index={1}
              />
              <StepCard
                number="3"
                title="Get Insights"
                description="Receive detailed AI-powered analysis and recommendations."
                index={2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-gradient-to-br from-[#3A0CA3] via-[#4CC9F0] to-[#3A0CA3] text-white overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#F72585] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Improve Your Resume?
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Join thousands of job seekers who've successfully improved their 
              resumes and landed their dream jobs with ResuMatch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/upload"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#3A0CA3] rounded-xl hover:bg-[#F8F9FA] transition-all shadow-2xl"
                >
                  <span className="text-lg font-semibold">Start Your Analysis Now</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>Free to use</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>Instant results</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.article 
      className="group bg-white p-8 rounded-2xl border border-[#E0E0E0] hover:border-[#4CC9F0] transition-all relative overflow-hidden"
      style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.08)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
      }}
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4CC9F0] to-[#3A0CA3] opacity-0 group-hover:opacity-5 transition-opacity duration-300" aria-hidden="true" />
      
      <motion.div 
        className="relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-14 h-14 bg-gradient-to-br from-[#4CC9F0] to-[#3A0CA3] bg-opacity-10 rounded-xl flex items-center justify-center text-[#3A0CA3] mb-5 group-hover:shadow-lg transition-all">
          {icon}
        </div>
      </motion.div>
      <h3 className="font-bold text-lg text-[#1E1E1E] mb-3 group-hover:text-[#3A0CA3] transition-colors">
        {title}
      </h3>
      <p className="text-[#555555] leading-relaxed">
        {description}
      </p>
    </motion.article>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

function StepCard({ number, title, description, index }: StepCardProps) {
  const colors = [
    { from: '#3A0CA3', to: '#4CC9F0' },
    { from: '#4CC9F0', to: '#F72585' },
    { from: '#F72585', to: '#F4A261' }
  ];

  return (
    <motion.article 
      className="text-center relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <motion.div
        className="relative inline-block mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${colors[index].from}, ${colors[index].to})`
          }}
          aria-label={`Step ${number}`}
        >
          <span className="text-3xl font-bold text-white">{number}</span>
        </div>
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl blur-xl opacity-50"
          style={{
            background: `linear-gradient(135deg, ${colors[index].from}, ${colors[index].to})`
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        />
      </motion.div>
      
      <h3 className="font-bold text-xl text-[#1E1E1E] mb-3">
        {title}
      </h3>
      <p className="text-[#555555] leading-relaxed">
        {description}
      </p>
    </motion.article>
  );
}
