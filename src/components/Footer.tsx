import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E0E0E0] mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#3A0CA3] rounded flex items-center justify-center">
              <span className="text-white text-sm" aria-hidden="true">R</span>
            </div>
            <span className="text-[#555555]">
              © 2025 ResuMatch. All rights reserved.
            </span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  to="/about"
                  className="text-[#555555] hover:text-[#3A0CA3] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-[#555555] hover:text-[#3A0CA3] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-[#555555] hover:text-[#3A0CA3] transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#555555] hover:text-[#3A0CA3] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
