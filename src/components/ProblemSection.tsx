import { AlertTriangle, Code, Zap } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Code,
      title: "Project Graveyard",
      description: "Too many unfinished projects collecting digital dust in your GitHub"
    },
    {
      icon: Zap,
      title: "Feature Creep Spiral",
      description: "Adding just one more feature before shipping, then another, then another..."
    },
    {
      icon: AlertTriangle,
      title: "Momentum Loss",
      description: "Starting strong but losing steam without clear progress and accountability"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Solo Projects
            <span className="text-destructive"> Never Ship</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Without structure, accountability, and focus, even the best ideas become 
            abandoned side projects. It's time to break the cycle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
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