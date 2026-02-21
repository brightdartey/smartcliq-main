import { ModeToggle } from "@/components/ModeToggle";
import logo from "@/assets/smartcliq-logo.jpg";
import { CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 py-4 border-t border-border/50 bg-background/95 backdrop-blur-md shadow-lg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Socials */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="SmartCliQ Logo" className="h-8 w-auto" />
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact - Hidden on mobile to save space, or condensed */}
          <div className="hidden md:flex gap-6 text-xs text-muted-foreground">
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-foreground transition-colors">
              {CONTACT_INFO.email}
            </a>
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-foreground transition-colors">
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Copyright & Mode Toggle */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <p>© 2026 Smartcliq</p>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
