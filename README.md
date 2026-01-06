# Ultima UI

Ultima UI is a lightweight and modern React UI library built with styled-components. Designed for Next.js projects, dashboards, landing pages, and rapid MVP development.

---

## Features

- Reusable UI components
- Clean and modern design
- Easy to customize
- Optimized for Next.js App Router

---

## Installation

```bash
npm install ultima-ui

#or

yarn add ultima-ui
```

---

## Basic Usage

```jsx
import { ButtonVariant, HeaderVariant, CardVariant, SidebarVariant, FooterVariant } from "ultima-ui";

export default function Page() {
  return (
    <>
      <CardVariant 
        variant="animated"
        title="Ultima UI Card"
        desc="Lorem ipsum dolor sit amet"
        ctaPrimary={{ label: "Get Started", href: "#" }}
        ctaGhost={{ label: "Docs", href: "#" }}
      />
    </>
  );
}
```

---

## Components

- **Button**  
  Variants: `primary`, `secondary`, `outline`, `animated`

- **Card**  
  Variants: `primary`, `secondary`, `outline`, `animated`

- **Header**  
  Variants: `primary`, `secondary`, `outline`, `animated`

- **Sidebar**  
  Variants: `primary`, `secondary`, `rail`, `animated`

- **Footer**  
  Variants: `primary`, `secondary`, `outline`, `animated`

---

## 📄 License

MIT License © Ultima UI
