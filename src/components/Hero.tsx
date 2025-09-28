import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ChevronRight, Sparkles } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('notify-waitlist', {
        body: { email }
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      });
      
      setEmail("");
    } catch (error: any) {
      console.error("Error joining waitlist:", error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)] opacity-30" />
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground/80 tracking-wide uppercase">
              For Indie Devs & Solo Builders
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight px-4">
            Progress you can see.
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent font-extrabold"> Projects you can finish.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            The accountability platform for indie hackers. Track progress, maintain momentum, 
            and finally finish what you started with focused project boards and streak tracking.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-background/80 border-border text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
              required
            />
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
      
    </section>
  );
};

export default Hero;