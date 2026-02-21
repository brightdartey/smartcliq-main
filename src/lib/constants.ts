import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  Rocket, 
  Globe, 
  Smartphone, 
  Palette,
  ShieldCheck, 
  TrendingUp, 
  Target, 
  Zap
} from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";

export const CONTACT_INFO = {
  email: " smartcliqdigital@gmail.com",
  phone: "+233 55 152 2385",
  phoneRaw: "+233551522385", // For tel: links
  address: "Accra, Ghana & Global",
  googleMapsLink: "https://maps.google.com/?q=Accra,Ghana",
  bookingLink: "#book-strategy-call", // Placeholder for Calendly/Cal.com link
};

export const SOCIAL_LINKS = [
  { icon: Twitter, label: "X", href: ": https://x.com/smartcliq_?t=7Dq-2mxgbS5jG6x0HW-Hog&s=08" },
  { icon: Linkedin, label: "LinkedIn", href: " https://www.linkedin.com/company/smart-cliq" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/smartcliq" },
  { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/233551522385" },
];

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" }
];

export const TRUST_ITEMS = [
  { icon: ShieldCheck, text: "Trusted by growing brands" },
  { icon: TrendingUp, text: "Data-driven" },
  { icon: Target, text: "Results-focused" },
  { icon: Zap, text: "Growth-obsessed" }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover & Define Goals",
    description: "We start by understanding your business, audience, and growth objectives."
  },
  {
    number: "02",
    title: "Build the Right Digital Strategy",
    description: "We craft a customized plan combining the right channels and tactics for your goals."
  },
  {
    number: "03",
    title: "Launch, Test & Optimize",
    description: "We execute campaigns, continuously testing and refining for maximum performance."
  },
  {
    number: "04",
    title: "Scale What Works",
    description: "Once we find winning strategies, we double down to accelerate your growth."
  }
];

export const BENEFITS_LIST = [
  "Strategy-first approach",
  "Creative backed by data",
  "Clear goals, clear reporting",
  "Flexible solutions for growing businesses"
];

export const STATS_DATA = [
  { value: "10x", label: "Average ROI" },
  { value: "50+", label: "Brands Scaled" },
  { value: "2M+", label: "Ad Spend Managed" },
  { value: "98%", label: "Client Retention" }
];

export const SERVICES_OPTIONS = [
  { value: "Digital Advertising", label: "Digital Advertising (PPC)" },
  { value: "Web Development", label: "Web Development" },
  { value: "Social Media", label: "Social Media Marketing" },
  { value: "Branding", label: "Digital Branding" },
  { value: "Other", label: "Other / General Inquiry" },
];

export const SERVICES_DETAILS = [
  {
    icon: Rocket,
    title: "Digital Advertising",
    tagline: "Turn Attention into Revenue",
    description: "We run high-impact ad campaigns that reach the right audience and convert them into paying customers.",
    features: [
      "Facebook & Instagram Ads",
      "Google Search & Display Ads",
      "Lead Generation & Sales Funnels",
      "Retargeting & Conversion Optimization"
    ],
    result: "More leads. Lower cost per acquisition. Better ROI."
  },
  {
    icon: Globe,
    title: "Web Development",
    tagline: "Websites Built for Growth",
    description: "Your website should do more than look good—it should convert.",
    features: [
      "Business & Startup Websites",
      "Landing Pages for Campaigns",
      "E-commerce Development",
      "Mobile-First, SEO-Ready Design"
    ],
    result: "A fast, modern website that sells 24/7."
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    tagline: "Build Trust. Grow Community. Drive Sales.",
    description: "We help brands show up consistently and meaningfully across social platforms.",
    features: [
      "Content Strategy & Planning",
      "Social Media Management",
      "Creative Content (Reels, Videos, Graphics)",
      "Paid Social Campaigns"
    ],
    result: "Higher engagement and stronger brand loyalty."
  },
  {
    icon: Palette,
    title: "Digital Branding",
    tagline: "Stand Out in a Crowded Market",
    description: "We shape clear, memorable digital brands that people recognize and trust.",
    features: [
      "Brand Strategy & Positioning",
      "Visual Identity & Design",
      "Brand Messaging & Tone",
      "Digital Brand Guidelines"
    ],
    result: "A professional brand built for long-term growth."
  }
];
