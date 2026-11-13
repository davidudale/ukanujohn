import { FAQItem } from '../types';

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Quotations',
    question: 'What information is needed to request an accurate quotation?',
    answer: 'To provide an accurate and cost-effective system proposal, we require: (1) your property type (residential, commercial, or institutional), (2) a list of major electrical appliances you intend to power simultaneously (particularly air conditioning units, pumping machines, refrigerators, and heavy equipment), (3) your average monthly utility bills or diesel consumption, and (4) the physical location of the property. If you have an existing single-line electrical diagram or recent energy audit, that accelerates the process.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Which types of customers does Ukanu Energy Models serve?',
    answer: 'We serve four primary customer segments: (1) Residential homeowners and estates seeking dependable 24/7 power independence; (2) Commercial enterprises, including corporate offices, logistics hubs, retail centers, and manufacturing plants looking to slash operating costs; (3) Institutional bodies, such as hospitals, diagnostic centers, schools, and civic facilities where uninterrupted electricity is non-negotiable; and (4) Agricultural operators requiring solar water pumping, cold-chain preservation, and micro-grid power.'
  },
  {
    id: 'faq-3',
    category: 'Technical',
    question: 'What key factors affect renewable energy system sizing?',
    answer: 'System sizing is governed by four engineering factors: (1) Total Daily Energy Demand in kilowatt-hours (kWh), which determines solar panel array capacity; (2) Peak Simultaneous Load in kVA/kW, which dictates inverter capacity so equipment starts without tripping; (3) Desired Battery Autonomy (hours or days of backup during rainy spells or overnight); and (4) Available Unshaded Roof or Ground Space with optimal orientation towards sunlight.'
  },
  {
    id: 'faq-4',
    category: 'Maintenance',
    question: 'Does Ukanu Energy Models provide installation and ongoing maintenance services?',
    answer: 'Yes. We deliver complete turnkey engineering services. Every system is installed by certified electrical engineers complying with standard safety codes, including earthing, surge suppression, and conduit isolation. We also offer scheduled preventive maintenance contracts (quarterly or semi-annually), covering infrared thermography, module cleaning, battery health audits, and rapid technical support.'
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'How can a prospective customer arrange an initial consultation or site survey?',
    answer: 'You can request a consultation directly through the "Request a Quote" or "Contact Us" form on this website, or reach our technical desk via phone at +234 803 000 0000 or email at contact@ukanuenergymodels.com. Our engineering team will review your initial details and schedule either an on-site technical inspection or virtual load audit within 24 to 48 business hours.'
  },
  {
    id: 'faq-6',
    category: 'Technical',
    question: 'Can the solar system work with our existing diesel or petrol generator?',
    answer: 'Absolutely. Our hybrid inverters are engineered for seamless multi-source synchronization. The system can be programmed to prioritize solar and battery power first, using your existing generator purely as a secondary emergency reserve during prolonged cloudy periods. An Automatic Generator Start (ATS) dry-contact relay can even start and stop your generator automatically when battery levels reach a preset threshold.'
  },
  {
    id: 'faq-7',
    category: 'Quotations',
    question: 'What is the typical lifespan and warranty on your equipment?',
    answer: 'We deploy only Tier-1 equipment sourced from reputable manufacturers. Our solar PV modules carry a 12-year product workmanship warranty and a 25-year linear performance warranty (guaranteed >80% output at year 25). Our smart hybrid inverters carry 5-year standard manufacturer warranties, and our LiFePO4 lithium battery systems carry 5-to-10 year warranties with a rated cycle life exceeding 6,000 cycles at 80% Depth of Discharge.'
  },
  {
    id: 'faq-8',
    category: 'Technical',
    question: 'What happens during prolonged rainy or overcast weather?',
    answer: 'Modern monocrystalline solar panels continue to generate electricity even under diffuse cloudy conditions, typically at 15% to 35% of their rated peak output. For extended rainy periods, your system relies on the calculated battery storage reserves. If the battery bank reaches its safe depth-of-discharge threshold, our smart hybrid systems automatically draw power from the utility grid or trigger the standby generator until sunshine returns.'
  }
];

