import { Target, Zap, Clock, TrendingUp } from "lucide-react";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            From Ideas to
            <span className="text-accent"> Shipped MVPs</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Finally finish what you start with accountability, focus, and momentum tracking
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-6 bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;