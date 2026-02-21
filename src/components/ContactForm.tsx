import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactFormFields } from "@/components/contact/ContactFormFields";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Contact Info */}
          <ContactInfo />

          {/* Right Column: Form */}
          <div className="bg-card shadow-xl border border-border/50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <ContactFormFields />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
