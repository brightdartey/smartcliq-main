import { TRUST_ITEMS } from "@/lib/constants";

const TrustStrip = () => {
  return (
    <section className="relative py-8 border-y border-border/50 bg-secondary/30 backdrop-blur-sm overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {TRUST_ITEMS.map((item, index) => (
            <div key={index} className="flex items-center gap-2 group">
              <item.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
              <span className="text-sm md:text-base text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
