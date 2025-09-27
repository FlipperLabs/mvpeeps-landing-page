import { Target, Zap, Clock, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Clearer Goals",
      description: "Stop building features nobody wants. Get laser-focused on user value and business objectives."
    },
    {
      icon: TrendingUp,
      title: "Stronger MVP",
      description: "Build the right foundation first. Validate core assumptions before adding complexity."
    },
    {
      icon: Zap,
      title: "Faster Iteration",
      description: "Get immediate feedback and course-correct quickly instead of building in the wrong direction."
    },
    {
      icon: Clock,
      title: "Less Wasted Time",
      description: "Avoid the build-test-scrap cycle. Make informed decisions from day one."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            From Vibes to
            <span className="bg-gradient-to-r from-success via-primary to-accent bg-clip-text text-transparent"> Viable</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transform your development process with the guidance of a complete product team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-6 bg-card rounded-xl p-8 shadow-soft border border-border hover:shadow-playful hover:border-success/30 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-success to-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-success transition-colors duration-300">
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