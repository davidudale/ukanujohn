import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'solar-energy-solutions',
    title: 'Solar Energy Solutions',
    tagline: 'High-yield photovoltaic power systems designed for continuous reliability.',
    shortDescription: 'Tailored residential, commercial, and industrial solar installations delivering uninterrupted clean power and drastic reductions in grid and generator fuel costs.',
    iconName: 'Sun',
    problemSolved: 'Eliminates reliance on erratic national grid supplies and noisy, expensive diesel or petrol generators that drain household and operational budgets.',
    scopeOfWork: [
      'Comprehensive site survey, structural roof analysis, and solar irradiance assessment',
      'Solar array sizing and string inverter or micro-inverter architectural layout',
      'Certified mechanical mounting on roof surfaces or custom ground-mount structures',
      'AC/DC cabling, surge protection devices, and grounding infrastructure',
      'System commissioning, safety compliance testing, and grid/generator integration'
    ],
    equipment: [
      'Tier-1 Monocrystalline PERC & N-Type Solar PV Modules (550W+)',
      'High-efficiency MPPT Solar Charge Controllers',
      'Aluminum corrosion-resistant mounting rails and weather-sealed fasteners',
      'Class-1 DC Isolators, PV combiner boxes, and Type II SPD lightning arresters'
    ],
    benefits: [
      'Immediate 60% - 90% reduction in electricity and fuel expenses',
      'Clean, silent operation with zero direct carbon emissions',
      '25-year linear performance warranty on Tier-1 photovoltaic panels',
      'Protection against rising tariffs and frequent grid fluctuations'
    ],
    limitations: 'Solar generation depends on daytime sunlight hours; requires complementary battery storage or hybrid grid connection for nighttime power requirements.',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'renewable-energy-systems',
    title: 'Renewable Energy Systems',
    tagline: 'Engineered hybrid and microgrid power architectures built for autonomy.',
    shortDescription: 'Integrated hybrid solar, battery energy storage systems (BESS), and microgrid architectures that ensure 24/7 uninterruptible power for mission-critical facilities.',
    iconName: 'Zap',
    problemSolved: 'Solves catastrophic blackouts and equipment damage in commercial, medical, and agricultural operations requiring seamless power transfer without milliseconds of interruption.',
    scopeOfWork: [
      'Load duration curve analysis and critical vs. non-critical load segregation',
      'Hybrid inverter and central energy storage system engineering',
      'Automated Transfer Switch (ATS) and smart generator auto-start integration',
      'Multi-source synchronization (Solar + Grid + Battery + Auxiliary Generator)',
      'System handover with comprehensive operational documentation and safety briefings'
    ],
    equipment: [
      'Pure Sine Wave Smart Hybrid Inverters (5kVA to 100kVA+)',
      'Lithium Iron Phosphate (LiFePO4) Battery Energy Storage Systems (BESS)',
      'Intelligent Battery Management Systems (BMS) with cell-level balancing',
      'Microprocessor-based automatic generator start and load management relays'
    ],
    benefits: [
      'Zero-millisecond switchover ensures computers and sensitive gear never reboot',
      'Deep cycling LiFePO4 batteries deliver 6,000+ operational cycles (10-15+ years)',
      'Smart peak-shaving reduces commercial maximum demand tariff charges',
      'Modular scalability allowing system expansion as power demands increase'
    ],
    limitations: 'Requires dedicated, well-ventilated, temperature-regulated equipment space; battery storage capacity is sized for planned load profiles and must not be overloaded.',
    image: 'https://images.unsplash.com/photo-1548611716-ad7825708a38?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'energy-consulting-design',
    title: 'Energy Consulting & System Design',
    tagline: 'Technical feasibility studies, load profiling, and precision electrical engineering.',
    shortDescription: 'Professional engineering advisory services providing exact load profiling, financial payback modeling, and technical schematics before capital investment.',
    iconName: 'Compass',
    problemSolved: 'Prevents expensive undersizing (which leads to system failures and battery damage) and wasteful oversizing caused by inaccurate guesswork and generic vendor quotes.',
    scopeOfWork: [
      '24-hour to 7-day electronic data logging and peak surge measurement',
      'Photovoltaic simulation modeling using PVSyst and Helioscope standards',
      'Levelized Cost of Energy (LCOE) and Return on Investment (ROI) financial analysis',
      'Single-Line Diagrams (SLD), cable schedule calculations, and protection coordination',
      'Procurement specifications, Bill of Engineering Measurement and Evaluation (BEME)'
    ],
    equipment: [
      'Industrial electrical power quality analyzers and data loggers',
      'Solar irradiance and thermal imaging diagnostic cameras',
      'Computer-Aided Engineering (CAD) and PV modeling software suites'
    ],
    benefits: [
      'Clear, risk-free feasibility report before spending money on hardware',
      'Optimized capital expenditure designed around your genuine daily consumption',
      'Independent technical verification of proposed vendor specifications',
      'Documented compliance with national electrical wiring regulations'
    ],
    limitations: 'Consulting outcomes provide engineering recommendations and design packages; physical implementation requires separate execution agreement.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'installation-and-maintenance',
    title: 'Installation & Maintenance',
    tagline: 'Certified engineering craftsmanship and scheduled preventive asset care.',
    shortDescription: 'Rigorous, standard-compliant mechanical and electrical installation backed by proactive preventive maintenance programs to protect your long-term energy yields.',
    iconName: 'Wrench',
    problemSolved: 'Protects solar investments against premature panel degradation, loose DC arc hazards, dust accumulation losses, and inverter failures caused by improper initial setup.',
    scopeOfWork: [
      'Full turnkey mechanical mounting, conduit routing, and torque-tested terminations',
      'Infrared thermographic scanning of junction boxes, switchgear, and connections',
      'De-ionized solar panel module cleaning and surface decontamination',
      'Battery state-of-health diagnostics, internal resistance testing, and firmware updates',
      'Emergency breakdown troubleshooting and rapid spare parts dispatch'
    ],
    equipment: [
      'Calibrated digital insulation testers (Megger) and earth resistance meters',
      'High-resolution FLIR thermal imaging cameras',
      'Specialized non-abrasive solar module cleaning equipment and purified water wash',
      'Inverter diagnostic interface tools and OEM firmware programming units'
    ],
    benefits: [
      'Maintains peak generation efficiency (prevents 15% - 25% dust and soiling yield losses)',
      'Ensures full manufacturer warranty compliance through documented maintenance logs',
      'Eliminates electrical fire risks through periodic thermal and insulation checks',
      'Extended overall system lifespan beyond 15 to 20 years'
    ],
    limitations: 'Routine maintenance contracts are scheduled on quarterly or semi-annual cycles; physical access to rooftop or inverter rooms is required.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
  }
];

