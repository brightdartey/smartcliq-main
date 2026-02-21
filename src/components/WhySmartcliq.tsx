import { Check } from "lucide-react";
import { BENEFITS_LIST, STATS_DATA } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const WhySmartcliq = () => {
  return (
    <section className="py-24 md:py-32 relative bg-secondary/20" id="why-us">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Why Smartcliq
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Built for Startups.{" "}
                <span className="text-gradient">Designed for Scale.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground text-lg mb-8">
                We partner with you like an in-house growth team—not just another agency.
              </p>
            </ScrollReveal>

            {/* Benefits List */}
            <ul className="space-y-4">
              {BENEFITS_LIST.map((benefit, index) => (
                <ScrollReveal key={index} delay={300 + index * 100}>
                  <li 
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <ScrollReveal delay={200} className="relative z-10 p-8 rounded-2xl border border-border bg-card shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {STATS_DATA.map((stat, i) => (
                  <div key={i} className="text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300">
                    <div className="text-4xl font-display font-bold text-gradient mb-2">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySmartcliq;
