import { MessageSquare, Users, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Define Your MVP",
      description: "Create a focused project board with only the essentials needed to ship"
    },
    {
      number: "02", 
      icon: Users,
      title: "Track & Build",
      description: "Maintain momentum with streak tracking and get AI guidance when stuck"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Ship & Iterate",
      description: "Progress insights nudge you toward completion, not endless polishing"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A simple, focused workflow designed to get indie hackers from idea to shipped MVP
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-primary z-0" />
                )}
                
                <div className="relative bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-lg transition-shadow text-center">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="text-sm font-bold text-primary mb-2 tracking-wider">
                    STEP {step.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;