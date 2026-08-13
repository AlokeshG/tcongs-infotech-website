"use client";

import { useState } from "react";

import Navbar from "../src/components/Navbar";
import Partners from "../src/components/Partners";
import StartSection from "../src/components/StartSection";
import SolutionSection from "../src/components/SolutionSection";
import ServicesSection from "../src/components/ServicesSection";
import ResourcesSection from "../src/components/ResourcesSection";
import AboutSection from "../src/components/AboutSection";
import ApproachSection from "../src/components/ApproachSection";
import TestimonialsSection from "../src/components/TestimonialsSection";
import CaseStudy from "../src/components/CaseStudy";
import CTASection from "../src/components/CTASection";
import Footer from "../src/components/Footer";
import ChatAssistant from "../src/components/ChatAssistant";

export default function HomePage() {

  // Chat open/close state
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
      />


      {/* ================= MAIN WEBSITE ================= */}

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


      {/* ================= CHAT ASSISTANT ================= */}

      <ChatAssistant
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
      />
    </>
  );
}