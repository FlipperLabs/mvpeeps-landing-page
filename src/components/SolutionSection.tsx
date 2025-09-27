import { Brain, Users, Target, Wrench } from "lucide-react";

const SolutionSection = () => {
  const personas = [
    {
      icon: Brain,
      role: "The Strategist",
      description: "Keeps you focused on business goals and market fit",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Target,
      role: "The Challenger", 
      description: "Questions assumptions and pokes holes in your logic",
      color: "bg-destructive/10 text-destructive"
    },
    {
      icon: Users,
      role: "User Advocate",
      description: "Ensures every feature serves real user needs",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Wrench,
      role: "The Engineer",
      description: "Balances technical feasibility with product vision",
      color: "bg-primary-glow/10 text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your AI-Powered
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"> Product Team</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get the diverse perspectives you need to build products that matter. 
            Four specialized AI personas working together to keep you on track.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {personas.map((persona, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-playful hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 group">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${persona.color} group-hover:scale-110 transition-transform duration-300`}>
                <persona.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {persona.role}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 shadow-card border border-border">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-card-foreground">
              Working together to challenge your assumptions and refine your ideas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;