import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Activity,
  ArrowRight,
  BarChart2,
  CalendarRange,
  Check,
  Clock3,
  Target,
} from "lucide-react";

const COMMIT_SEQUENCE = ["0", "2", "4", "7", "9", "12"];

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentCommit, setCurrentCommit] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommit((prev) => (prev + 1) % COMMIT_SEQUENCE.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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
    } catch (error: unknown) {
      console.error("Error joining waitlist:", error);
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const highlights = [
    {
      icon: Activity,
      label: "Focus on what matters",
    },
    {
      icon: BarChart2,
      label: "Track progress effortlessly",
    },
    {
      icon: Target,
      label: "Stay accountable with peers",
    },
    {
      icon: Clock3,
      label: "Build consistent shipping streaks",
    },
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background py-16 sm:py-20">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="absolute inset-x-0 top-[-30%] h-[60%] rounded-[50%] bg-primary/5 blur-[150px]" />

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-14">
          <div className="w-full space-y-8 lg:w-1/2">

            <div className="space-y-6">
              <h1 className="text-3xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
                Stay Focused.
                <br className="hidden sm:block" />
                Stay Accountable.
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
                Trade drift for discipline. Map the critical path to your MVP, lock in daily wins, and track every milestone so you finish what you start.
              </p>
            </div>

            <ul className="grid gap-3 sm:max-w-sm sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/80 px-3 py-2 text-xs font-semibold text-foreground shadow-sm backdrop-blur"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="space-y-3 w-full max-w-xl">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded-xl border border-border bg-background/80 text-base backdrop-blur placeholder:text-muted-foreground"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:bg-transparent hover:brightness-105 sm:w-auto"
                >
                  {isSubmitting ? "Joining..." : "Join the waitlist"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <p className="text-xs font-medium text-muted-foreground">
                Join fellow indie builders shipping faster together — updates straight to your inbox.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto w-full max-w-[560px] scale-[0.92] sm:scale-95 md:scale-[0.98] lg:scale-100">
              <div className="absolute -inset-3 rounded-[2.6rem] bg-gradient-to-br from-primary/10 via-secondary/12 to-accent/10 blur-2xl sm:-inset-6 sm:blur-3xl" />
              <div className="relative rounded-[2.3rem] border border-border/80 bg-card/95 p-6 shadow-2xl backdrop-blur sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {["#f87171", "#fbbf24", "#34d399"].map((hex) => (
                      <span
                        key={hex}
                        className="h-3 w-3 rounded-full border border-border/40"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <span className="h-9 w-9 rounded-full border border-border/60 bg-background/70" />
                    <span className="h-9 w-9 rounded-full border border-border/60 bg-background/70" />
                    <span className="h-9 w-9 rounded-full border border-border/60 bg-background/70" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/60 bg-muted/40 p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">8 days until launch</p>
                        <p className="text-sm text-muted-foreground">Keep building towards your goal</p>
                      </div>
                      <button className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                        <CalendarRange className="h-4 w-4 text-primary" />
                        Edit Date
                      </button>
                    </div>
                    <div className="mt-5 space-y-3 text-xs font-medium text-muted-foreground">
                      <div>
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
                          <span>Progress to launch</span>
                          <span>Started Sep 30</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-background/60">
                          <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-primary to-secondary" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
                          <span>Target launch date</span>
                          <span>Sunday, October 12, 2025</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-background/60">
                          <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-secondary to-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        label: "Tasks Completed",
                        primary: "8/20",
                        helper: "40% complete",
                      },
                      {
                        label: "Commit Streak",
                        primary: "3 days",
                        helper: "Active today",
                      },
                      {
                        label: "This Week",
                        helper: "Keep going",
                        animated: true,
                      },
                      {
                        label: "Milestones",
                        primary: "1/5",
                        helper: "20% complete",
                      },
                    ].map((card) => (
                      <div key={card.label} className="rounded-2xl border border-border/60 bg-card/90 p-4 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          {card.label}
                        </p>
                        <p className="mt-3 text-2xl font-bold text-foreground">
                          {card.animated ? (
                            <span className="inline-flex items-baseline gap-1 text-primary">
                              <span className="text-foreground">{COMMIT_SEQUENCE[currentCommit]}</span>
                              <span className="text-sm font-medium text-muted-foreground">commits</span>
                            </span>
                          ) : (
                            card.primary
                          )}
                        </p>
                        <p className="mt-1 text-xs font-medium text-primary">{card.helper}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-border/50 bg-muted/30 p-4 text-sm font-medium text-primary">
                    🚀 Every expert was once a beginner. Start your streak today!
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Tasks Done", value: "8" },
                      { label: "Day Streak", value: "2" },
                      { label: "Achievements", value: "2" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-border/60 bg-card/90 p-4 text-center"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-3 text-3xl font-bold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
