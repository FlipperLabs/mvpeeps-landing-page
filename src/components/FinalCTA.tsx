import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ChevronRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
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
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)] opacity-30" />
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground/80 tracking-wide uppercase">
              Ready to Build Better?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.3] pb-2">
            Stop Building <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">Alone</span>.
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent leading-[1.3]">
              Start Building Smart.
            </span>
          </h2>
          
          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            Join the waitlist and be among the first to experience what it's like 
            to have a complete product team guiding every decision.
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
      <div className="absolute top-10 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
    </section>
  );
};

export default FinalCTA;