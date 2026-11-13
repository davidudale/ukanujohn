# Ukanu Energy Models — Corporate Website

> **Smarter Energy. Sustainable Possibilities.**  
> Official corporate website for Ukanu Energy Models, presenting verified renewable-energy solutions, high-efficiency solar engineering, and client quotation tools.

---

## 1. Project Overview

This repository houses the modern frontend for **Ukanu Energy Models**, built strictly according to the website design and implementation specification plan.

### Core Value Proposition
- **Residential Solutions:** Turnkey solar rooftop and silent LiFePO4 battery systems that eliminate generator dependence.
- **Commercial & Industrial Systems:** Three-phase high-voltage solar PV arrays reducing daytime and nighttime generator fuel expenditures by up to 80%.
- **Institutional Facilities:** Mission-critical uninterruptible power systems for hospitals, maternity centers, schools, and civic infrastructure.
- **Consulting & System Design:** Mathematical load profiling, PVSyst simulation modeling, and Single-Line Diagrams (SLD).

---

## 2. Technical Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | React 18 + Vite | Lightning-fast HMR and optimized production bundling |
| **Language** | TypeScript | Strict type safety for data models, forms, and components |
| **Styling** | Tailwind CSS v3 | Custom corporate color palette (Forest Green & Solar Amber) |
| **Routing** | React Router v6 | Client-side routing with deep link handling |
| **Icons** | Lucide React | High-contrast, standard-compliant line iconography |
| **Forms & State** | Controlled React Forms | Real-time client-side validation, error states, and local persistence |

---

## 3. Brand & Visual Design System

- **Primary Brand Color:** Deep Forest Green (`#0C3B2E` / `forest-900`)
- **Secondary Accent:** Solar Gold / Warm Amber (`#F59E0B` / `solar-500`)
- **Supporting Neutral:** Dark Charcoal (`#111827` / `charcoal-900`)
- **Backgrounds:** Pure White (`#FFFFFF`) and Light Neutral Grey (`#F8FAFC`)
- **Typography:** Modern clean sans-serif (`Inter`, `system-ui`)

---

## 4. Information Architecture & Pages

- **Home (`/`)**:
  - Hero with value proposition, verified metrics (99.8% yield, 25-yr panel warranty, 6,000+ battery cycles)
  - Company overview & engineering mission
  - Visual summary of 4 confirmed services
  - **Interactive Energy Estimator**: Real-time educational load calculator recommending inverter kVA, solar array kWp, and LiFePO4 battery bank size
  - Featured projects showcase with documented field metrics
  - 4-step engagement process (Audit -> Design -> Installation -> Maintenance)
  - Frequently Asked Questions preview accordion
  - High-impact closing call to action
- **About Us (`/about`)**:
  - Company background, mission, vision, and core engineering values
  - Multidisciplinary engineering credentials & standard compliance
- **Solutions & Services (`/services`)**:
  - Detailed breakdown of 4 confirmed services:
    1. Solar Energy Solutions
    2. Renewable Energy Systems
    3. Energy Consulting & System Design
    4. Installation & Preventive Maintenance
  - Scope of work, confirmed equipment, benefits, and engineering limitations
- **Products & Hardware (`/products`)**:
  - Informational product catalogue with category filter tabs (Solar Panels, Inverters, Battery Storage, Accessories)
  - Technical specifications tables, application tags, and 1-click quotation pre-fill
- **Projects / Portfolio (`/projects`)**:
  - Verified project case studies across Commercial, Institutional, Residential, and Agricultural sectors
  - Aggregate metrics counter (165+ kWp PV, 220+ kWh Storage, >75% fuel cut)
  - Interactive modal inspect view for full case study details
- **Insights & Resources (`/insights`)**:
  - Technical educational guides: Grid-Tied vs. Hybrid, Solar Sizing Calculations, LiFePO4 Chemistry, and Module Maintenance
  - Dedicated full-article reader modal
- **FAQs (`/faqs`)**:
  - Searchable, categorized accordion covering Quotations, Technical Sizing, Warranties, and Maintenance
- **Contact Us (`/contact`)**:
  - Technical quotation form with live validation, reference ID generation, and success feedback
  - Direct telephone, corporate email, office address, operating hours, and service regions

---

## 5. Development & Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Compile production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 6. Scope Boundaries & Compliance

As defined in Section 12 of the implementation plan, this project is strictly an informational and enquiry corporate website. It excludes mobile applications, IoT telemetry, e-commerce checkouts, and customer login dashboards.
