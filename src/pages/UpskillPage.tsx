import { Link } from "react-router-dom";
import { BookOpen, Clock, Star, ArrowLeft, ExternalLink } from "lucide-react";

const SAMPLE_COURSES = [
  {
    title: "Digital Marketing Fundamentals",
    provider: "Google Digital Garage",
    duration: "40 hours",
    level: "Beginner",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjI4NDk3NzV8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Learn the basics of digital marketing including SEO, social media marketing, and content strategy."
  },
  {
    title: "Data Analytics Professional Certificate",
    provider: "Google via Coursera",
    duration: "6 months",
    level: "Beginner to Intermediate",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjI4NDk3NzV8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Master data analysis skills including data cleaning, visualization, and statistical analysis using Python and SQL."
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    provider: "Amazon Web Services",
    duration: "20 hours",
    level: "Beginner",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjI4NDk3NzV8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Get started with cloud computing and learn AWS fundamentals for modern application development."
  },
  {
    title: "Python for Data Science",
    provider: "IBM via edX",
    duration: "5 weeks",
    level: "Intermediate",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjI4NDk3NzV8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Learn Python programming for data analysis, including pandas, numpy, and data visualization libraries."
  },
  {
    title: "UX Design Specialization",
    provider: "California Institute of the Arts via Coursera",
    duration: "4 months",
    level: "Beginner",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjI4NDk3NzV8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Master user experience design principles, prototyping, and user research methodologies."
  },
  {
    title: "Project Management Professional (PMP)",
    provider: "Project Management Institute",
    duration: "60 hours",
    level: "Advanced",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjI4NDk3NzV8MA&ixlib=rb-4.1.0&q=80&w=400",
    description: "Industry-recognized certification for project management professionals with comprehensive training."
  }
];

export function UpskillPage() {
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
            Recommended Courses to Improve Your Skills
          </h1>
          <p className="text-lg text-[#555555]">
            Based on your resume analysis, here are some courses that can help you bridge skill gaps 
            and advance your career.
          </p>
        </div>

        {/* Feature Banner */}
        <div 
          className="bg-gradient-to-r from-[#4CC9F0] to-[#3A0CA3] p-6 rounded-xl text-white mb-8"
          role="status"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                🚀 Feature Under Development
              </h2>
              <p className="text-white text-opacity-90">
                We're building personalized course recommendations powered by AI. 
                The courses shown below are sample suggestions. Soon, you'll get 
                custom recommendations based on your specific skill gaps and career goals.
              </p>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_COURSES.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 text-center">
          <div 
            className="bg-white p-8 rounded-xl max-w-2xl mx-auto"
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
          >
            <h2 className="text-2xl font-bold text-[#1E1E1E] mb-3">
              More Features Coming Soon
            </h2>
            <p className="text-[#555555] mb-6">
              We're working on integrating direct course enrollment, progress tracking, 
              and personalized learning paths tailored to your career goals.
            </p>
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
    </div>
  );
}

interface CourseCardProps {
  course: {
    title: string;
    provider: string;
    duration: string;
    level: string;
    rating: number;
    image: string;
    description: string;
  };
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <article 
      className="bg-white rounded-xl overflow-hidden border border-[#E0E0E0] hover:border-[#4CC9F0] transition-all group"
      style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.12)' }}
    >
      <div className="relative h-40 bg-gradient-to-br from-[#3A0CA3] to-[#4CC9F0] overflow-hidden">
        <div className="absolute inset-0 bg-[#3A0CA3] opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-12 h-12 text-white opacity-80" />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-[#F4A261] text-[#F4A261]" />
            <span className="font-semibold text-[#1E1E1E]">{course.rating}</span>
          </div>
          <span className="text-sm text-[#A0A0A0]">•</span>
          <span className="text-sm text-[#555555]">{course.level}</span>
        </div>

        <h3 className="font-semibold text-[#1E1E1E] mb-2 line-clamp-2 group-hover:text-[#3A0CA3] transition-colors">
          {course.title}
        </h3>

        <p className="text-sm text-[#555555] mb-3 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-[#555555] mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        <p className="text-sm text-[#555555] mb-4">
          by <span className="font-semibold text-[#3A0CA3]">{course.provider}</span>
        </p>

        <button
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#F8F9FA] text-[#3A0CA3] border border-[#E0E0E0] rounded-lg hover:bg-[#3A0CA3] hover:text-white hover:border-[#3A0CA3] transition-colors"
          disabled
        >
          <span>View Course</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}
