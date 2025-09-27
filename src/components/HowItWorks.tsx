import { MessageSquare, Users, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Set the Foundation",
      description: "Connect your repo, share your project goals and what you've built so far"
    },
    {
      number: "02", 
      icon: Users,
      title: "Get Team Feedback",
      description: "Our AI personas analyze, challenge, and provide diverse perspectives"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Refine Into MVP",
      description: "Receive actionable insights to focus on what truly matters"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Simple, effective process to transform your ideas into focused, user-centered products
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 z-0" />
                )}
                
                <div className="relative bg-card rounded-xl p-8 shadow-soft border border-border hover:shadow-playful hover:border-secondary/30 transition-all duration-300 hover:-translate-y-2 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="text-sm font-bold text-secondary mb-2 tracking-wider">
                    STEP {step.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
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