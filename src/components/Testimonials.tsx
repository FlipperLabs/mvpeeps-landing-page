import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Indie Developer",
      content: "Finally, someone who tells me when my ideas are actually terrible. The challenger persona saved me months of work on a feature nobody would use.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      role: "Solo Founder",
      content: "Having a virtual product team in my pocket changed everything. I went from building random features to shipping a focused MVP in weeks.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Developer",
      content: "The user advocate perspective is gold. It's like having actual users in the room challenging every decision I make.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Builders
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join hundreds of developers who've transformed their building process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-card border border-border relative">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;