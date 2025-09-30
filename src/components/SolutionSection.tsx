import { Brain, Users, Target, Zap } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Target,
      role: "MVP Project Board",
      description: "Focus only on essential features needed to ship your first version",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Zap,
      role: "Coding Streak Tracker", 
      description: "Maintain momentum with visible progress and consistency metrics",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Brain,
      role: "Progress Insights",
      description: "Get nudged toward shipping outcomes, not just busy work activity",
      color: "bg-primary-glow/10 text-primary"
    },
    {
      icon: Users,
      role: "AI Team Guidance",
      description: "Lightweight feedback from virtual strategists and user advocates",
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Track Progress,
            <span className="text-primary"> Ship MVPs</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Focus on what matters with project boards, streak tracking, and progress insights. 
            AI guidance keeps you balanced and accountable along the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                {feature.role}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 shadow-card border border-border">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-card-foreground">
              Everything you need to go from idea to shipped MVP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;