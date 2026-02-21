import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import WhySmartcliq from "@/components/WhySmartcliq";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-16">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <WhySmartcliq />
      <HowItWorks />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
