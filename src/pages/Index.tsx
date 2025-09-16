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
    document.title = "Virtual Product Team for Indie Developers | AI-Powered Building";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get AI-powered product team feedback for indie developers. Turn vibes into viable products with virtual strategists, challengers, and user advocates.");
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
