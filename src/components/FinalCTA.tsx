import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Sparkles } from "lucide-react";
const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('notify-waitlist', {
        body: {
          email
        }
      });
      if (error) throw error;
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!"
      });
      setEmail("");
    } catch (error: unknown) {
      console.error("Error joining waitlist:", error);
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="absolute inset-x-0 bottom-[-40%] h-[60%] rounded-[50%] bg-secondary/10 blur-[160px]" />

      <div className="relative container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl gap-10 rounded-[2.5rem] border border-border/60 bg-card/95 p-10 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 self-center rounded-full border border-border/60 bg-muted/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground lg:self-start">
                <Sparkles className="h-4 w-4 text-accent" />
                Ship what you start
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Don&apos;t just code. <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Finish.</span>
              </h2>
              <p className="text-lg text-foreground/75">
                Join a cohort of builders staying accountable, celebrating wins, and actually getting MVPs into the wild.
              </p>
            </div>

            <div className="mx-auto w-full max-w-md rounded-2xl border border-border/60 bg-background/80 p-6 shadow-[var(--shadow-card)]">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 text-left">
                  <label htmlFor="final-cta-email" className="text-sm font-medium text-foreground/80">
                    Join the private beta waitlist
                  </label>
                  <Input
                    id="final-cta-email"
                    type="email"
                    placeholder="Your best email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-xl border border-border bg-background/90 text-base"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-xl bg-gradient-to-r from-primary via-secondary to-accent font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:bg-transparent hover:brightness-105"
                >
                  {isSubmitting ? "Joining..." : "Join waitlist"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-muted-foreground">
                  Zero spam. We&apos;ll only reach out when you can start building alongside other focused makers.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FinalCTA;
