import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PageLayout } from "./components/PageLayout";
import { LandingPage } from "./pages/LandingPage";
import { UploadPage } from "./pages/UploadPage";
import { AnalyzingPage } from "./pages/AnalyzingPage";
import { ResultsPage } from "./pages/ResultsPage";
import { UpskillPage } from "./pages/UpskillPage";
import { ExpertPage } from "./pages/ExpertPage";
import { AboutPage } from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/analyzing" element={<AnalyzingPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/upskill" element={<UpskillPage />} />
          <Route path="/expert" element={<ExpertPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
