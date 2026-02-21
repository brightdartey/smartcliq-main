import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Let's Start a{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Conversation
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Ready to transform your digital presence? Whether you need a strategy session or a full-scale campaign, we are here to help.
        </p>
      </div>

      <div className="space-y-6">
        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Email Us</p>
            <p className="text-lg font-semibold text-foreground">{CONTACT_INFO.email}</p>
          </div>
        </a>

        <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Call Us</p>
            <p className="text-lg font-semibold text-foreground">{CONTACT_INFO.phone}</p>
          </div>
        </a>
        
        <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Location</p>
            <p className="text-lg font-semibold text-foreground">{CONTACT_INFO.address}</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border/50">
        <p className="text-sm font-medium text-muted-foreground mb-4">Connect with us</p>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }, i) => (
            <a 
              key={i} 
              href={href} 
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      
      <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
        <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2">
          <Calendar className="w-5 h-5 text-primary" />
          Prefer a meeting?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Skip the email and book a free 30-minute strategy call directly on our calendar.
        </p>
        <Button 
          variant="outline" 
          className="w-full bg-background hover:bg-primary hover:text-white border-primary/20"
          onClick={() => window.open(CONTACT_INFO.bookingLink, '_blank')}
        >
          Book a Strategy Call
        </Button>
      </div>
    </div>
  );
};
