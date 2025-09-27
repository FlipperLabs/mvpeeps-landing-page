import { AlertTriangle, Code, Zap } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Zap,
      title: "Dopamine-Driven Development",
      description: "Building features that feel good instead of features users need"
    },
    {
      icon: Code,
      title: "Endless Prototyping",
      description: "Getting stuck in the build loop without validating assumptions"
    },
    {
      icon: AlertTriangle,
      title: "Solo Blind Spots",
      description: "Missing critical perspectives that a real team would catch"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Vibe Coding Leads to
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"> Unfinished Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Building alone means missing the critical voices that keep products focused, 
            user-centered, and actually shippable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-soft border border-border hover:shadow-playful hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <problem.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;