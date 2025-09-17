import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";

import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "MVPeeps | AI-Powered Virtual Product Team for Indie Developers";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MVPeeps: Get AI-powered product team feedback for indie developers. Turn vibes into viable MVPs with virtual strategists, challengers, and user advocates.");
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Benefits />
      
      <FinalCTA />
    </main>
  );
};

export default Index;
