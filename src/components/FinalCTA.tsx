import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission here
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/80 tracking-wide uppercase">
              Ready to Build Better?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Stop Building Alone.
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Start Building Smart.
            </span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Join the waitlist and be among the first to experience what it's like 
            to have a complete product team guiding every decision.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              required
            />
            <Button type="submit" size="lg" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-accent">
              Join Waitlist
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="flex items-center justify-center gap-8 text-sm text-primary-foreground/60">
            <span>✓ Free to join</span>
            <span>✓ Early access</span>
            <span>✓ No spam, ever</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl" />
    </section>
  );
};

export default FinalCTA;