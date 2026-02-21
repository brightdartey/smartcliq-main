import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Data-Driven Digital Growth</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            Smart Digital Marketing for{" "}
            <span className="text-gradient">Fast-Growing Brands</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            We help startups and ambitious businesses attract customers, convert leads, and scale with data-driven digital strategies.
          </p>

          <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>From high-performing ads to conversion-focused websites, SmartCliq builds digital systems that drive real growth.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{
          animationDelay: '0.3s'
        }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://calendly.com/bright-a-dartey/30min" target="_blank" rel="noopener noreferrer">
                Get a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#services">
                View Our Work
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;