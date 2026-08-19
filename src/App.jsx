import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import ChatAssistant from "./components/ChatAssistant";

import Partners from "./components/Partners";
import StartSection from "./components/StartSection";
import SolutionSection from "./components/SolutionSection";
import ServicesSection from "./components/ServicesSection";
import ResourcesSection from "./components/ResourcesSection";
import AboutSection from "./components/AboutSection";
import ApproachSection from "./components/ApproachSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import CaseStudyPage from "./pages/CaseStudyPage";
import CareersPage from "./components/CareersPage";


/* =========================================================
   HOME PAGE
========================================================= */

function HomePage() {

  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
      />


      {/* =====================================================
          MAIN HOME PAGE
      ===================================================== */}

      <SolutionSection />

      <Partners />

      <StartSection />

      <ServicesSection />

      <ResourcesSection />

      <AboutSection />

      <ApproachSection />

      <TestimonialsSection />

      <CTASection />


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />


      {/* =====================================================
          CHAT ASSISTANT
      ===================================================== */}

      <ChatAssistant
        isOpen={chatOpen}
        setIsOpen={setChatOpen}
      />

    </>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* =================================================
            HOME
        ================================================= */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* =================================================
            CAREERS
            Supports both:
            /careers
            /careers/
        ================================================= */}

        <Route
          path="/careers"
          element={<CareersPage />}
        />

        <Route
          path="/careers/"
          element={<CareersPage />}
        />


        {/* =================================================
            CASE STUDY
        ================================================= */}

        <Route
          path="/case-study/:id"
          element={<CaseStudyPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;