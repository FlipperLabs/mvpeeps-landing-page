import { Clock, Focus, Sparkles, Target, TrendingUp, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Actually Finish Projects",
      description: "Break the cycle of abandoned side projects with focused MVP boards and clear shipping goals."
    },
    {
      icon: TrendingUp,
      title: "Maintain Momentum",
      description: "Streak tracking and progress insights keep you consistently moving toward completion."
    },
    {
      icon: Zap,
      title: "Ship Faster",
      description: "Focus on essentials first. AI guidance helps you resist feature creep and perfectionism."
    },
    {
      icon: Clock,
      title: "Stay Accountable",
      description: "Progress tracking and gentle nudges ensure you're always working toward shipping, not just coding."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-4 w-4 text-secondary" />
            Why builders stay
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
            From ideas to <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">shipped MVPs</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Accountability rituals, streak tracking, and focused workspaces that keep you in flow until launch day.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-card/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at top, hsl(var(--primary)/0.14), transparent 60%)" }} />
              <div className="relative flex flex-col gap-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 via-secondary/20 to-accent/20 text-primary">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div className="space-y-3 text-left">
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
              <Focus className="mt-8 h-5 w-5 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
