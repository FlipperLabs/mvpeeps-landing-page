import { useEffect } from "react";
import Hero from "@/components/Hero";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "mvpeeps";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MVPeeps keeps indie builders on track with streaks, milestone tracking, and MVP-focused accountability.");
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <ThemeToggle />
    </main>
  );
};

export default Index;
