import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-white border-b border-[#E0E0E0] sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="ResuMatch Home"
          >
            <div className="w-8 h-8 bg-[#3A0CA3] rounded-lg flex items-center justify-center">
              <span className="text-white" aria-hidden="true">R</span>
            </div>
            <span className="font-display font-bold text-xl text-[#3A0CA3]">
              ResuMatch
            </span>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  to="/about"
                  className="text-[#555555] hover:text-[#3A0CA3] transition-colors"
                >
                  About
                </Link>
              </li>
              {!isHome && (
                <li>
                  <Link
                    to="/upload"
                    className="px-4 py-2 bg-[#3A0CA3] text-white rounded-lg hover:bg-[#2E078A] transition-colors"
                    style={{ boxShadow: '0 2px 8px rgba(58,12,163,0.25)' }}
                  >
                    Get Started
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
