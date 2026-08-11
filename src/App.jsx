import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import StartSection from "./components/StartSection";
import SolutionSection from "./components/SolutionSection";
import ServicesSection from "./components/ServicesSection";
import ResourcesSection from "./components/ResourcesSection";
import AboutSection from "./components/AboutSection";
import ApproachSection from "./components/ApproachSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CaseStudy from "./components/CaseStudy";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import CaseStudyPage from "./pages/CaseStudyPage";


function HomePage() {
  return (
    <>
      <Navbar />

      <SolutionSection />

      <Partners />

      <StartSection />

      <ServicesSection />

      <ResourcesSection />

      <AboutSection />

      <ApproachSection />

      <TestimonialsSection />

      <CaseStudy />

      <CTASection />

      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Main Website */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Dynamic Case Study Page */}
        <Route
          path="/case-study/:id"
          element={<CaseStudyPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;