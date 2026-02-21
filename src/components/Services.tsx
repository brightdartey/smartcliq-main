import { SERVICES_DETAILS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Services = () => {
  return (
    <section className="py-24 md:py-32 relative" id="services">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              What We Do
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need to{" "}
              <span className="text-gradient">Grow Online</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine strategy, creativity, and performance marketing to help your brand win online—without the guesswork.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DETAILS.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div 
                className="group relative p-8 h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary/80 font-medium text-sm">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (

                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Result */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm">
                  <span className="text-primary font-semibold">Result: </span>
                  <span className="text-muted-foreground">{service.result}</span>
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
