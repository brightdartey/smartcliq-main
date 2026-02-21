# SmartCliQ - Digital Growth Agency

A high-performance, conversion-focused website built for digital agencies. Designed to be fast, responsive, and easy to customize.

![SmartCliQ Preview](public/og-image.png)

## 🚀 Features

- **Modern & Responsive:** Fully mobile-first design that looks great on all devices.
- **Dark/Light Mode:** Built-in theme toggle with persistent user preference.
- **Modular Content:** Update text, links, and data in **one file** (`src/lib/constants.ts`) without touching complex code.
- **High Performance:** Built with Vite and React for instant loading speeds.
- **Professional UI:** Styled with Tailwind CSS and Shadcn/UI components.
- **SEO Ready:** Semantic HTML structure and optimized meta tags.

## 🛠 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** CSS Keyframes + Utility classes

## 📦 Getting Started

### Prerequisites

Ensure you have Node.js (v18+) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/smartcliq.git
   cd smartcliq
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 📝 Customization

This project is architected for easy content updates. You don't need to dig into React components to change text or links.

### The "Command Center" (`src/lib/constants.ts`)

Navigate to `src/lib/constants.ts`. This file controls:

- **Contact Info:** Phone numbers, email, address.
- **Social Links:** WhatsApp, LinkedIn, Facebook, X (Twitter).
- **Navigation:** Menu items in the Navbar and Footer.
- **Services:** All services cards (Icons, Titles, Descriptions).
- **Stats:** The numbers shown in the "Why Us" section.

**Example:**
To change your phone number on the entire site:
```typescript
// src/lib/constants.ts
export const CONTACT_INFO = {
  phone: "+233 55 152 2385", // Update this line
  // ...
};
```

## 📂 Project Structure

```
src/
├── components/         # React components
│   ├── contact/        # Contact form specifics
│   ├── ui/             # Reusable UI elements (Buttons, Inputs)
│   ├── Hero.tsx        # Hero Section
│   ├── Navbar.tsx      # Navigation Bar
│   └── Footer.tsx      # Footer
├── lib/
│   ├── constants.ts    # ⚡ SOURCE OF TRUTH (Edit content here)
│   └── utils.ts        # Helper functions
├── pages/              # Route pages (Index, NotFound)
└── index.css           # Global styles & Tailwind directives
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
