import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/smartcliq-logo.jpg";
import { NAV_LINKS } from "@/lib/constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"}`}>
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
{/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="SmartCliQ Logo" className="h-8 md:h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                {link.label}
              </a>)}
          </nav>

          {/* Desktop CTA */}
          <Button variant="hero" size="default" className="hidden md:inline-flex" asChild>
            <a href="#contact">Get Started</a>
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map(link => <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200 py-2">
                  {link.label}
                </a>)}
              <Button variant="hero" size="default" className="mt-4 w-full" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Navbar;