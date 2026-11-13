import { InsightArticle } from '../types';

export const insightsData: InsightArticle[] = [
  {
    id: 'understanding-solar-systems-architectures',
    title: 'Understanding Solar Energy Systems: Grid-Tied vs. Hybrid vs. Off-Grid Architectures',
    readTime: '6 min read',
    category: 'System Architecture',
    date: 'February 2026',
    summary: 'A clear technical guide explaining the structural differences, component requirements, and ideal applications of grid-tied, hybrid, and standalone off-grid solar systems.',
    content: [
      'Selecting the right solar system architecture is the most fundamental decision when transitioning to renewable energy. A mismatch between your operational reality and the system design leads to either wasted generation or disappointing power outages.',
      '1. Grid-Tied Solar Systems: A grid-tied system connects directly to your municipal utility grid without battery storage. Solar panels generate direct current (DC), which a grid-tie inverter converts to alternating current (AC) to power your loads in real time. Any surplus is exported to the grid (where net-metering is supported). However, for safety reasons (anti-islanding regulations), if the utility grid goes down, a standard grid-tied inverter shuts off instantly to protect line technicians.',
      '2. Hybrid Solar Systems: The ideal architecture for regions with unreliable grid electricity. Hybrid inverters combine solar array input, battery storage banks, utility grid connection, and auxiliary generator inputs into a single intelligent hub. During daytime, solar powers your loads while charging batteries. During grid blackouts, the hybrid inverter disconnects from the grid in less than 10 milliseconds and powers your property smoothly from stored battery and solar energy.',
      '3. Off-Grid (Autonomous) Systems: Completely disconnected from the utility grid. Ideal for rural health posts, agricultural estates, and remote installations. Requires larger battery storage reserves and rigorous peak-surge calculations because there is no external grid buffer to rely on when energy demands spike.',
      'Summary Rule of Thumb: If you have zero grid access, choose Off-Grid. If you have an unstable grid and want 24/7 reliability with maximum fuel savings, choose Hybrid. If your grid is 100% reliable and net-metering is available, choose Grid-Tied.'
    ],
    keyTakeaways: [
      'Grid-tied systems do not supply backup power during utility blackouts unless paired with energy storage.',
      'Hybrid architectures provide the greatest resilience for homes and commercial businesses facing unpredictable grid supplies.',
      'Off-grid systems demand strict load management and accurate battery sizing to maintain autonomy during rainy spells.'
    ]
  },
  {
    id: 'solar-system-sizing-considerations',
    title: 'Solar System Sizing Considerations: Moving Beyond Rough Estimates to Precision Engineering',
    readTime: '8 min read',
    category: 'Engineering & Sizing',
    date: 'January 2026',
    summary: 'Why generic "rule-of-thumb" sizing often fails, and how engineers calculate daily watt-hour energy consumption, peak surge currents, and battery depth of discharge.',
    content: [
      'One of the most frequent mistakes in renewable energy procurement is sizing a system based solely on inverter rating (e.g., "I just need a 5kVA system"). An inverter rating only dictates how much power you can draw simultaneously at any one moment; it says nothing about how much energy (kilowatt-hours) your panels generate or how long your batteries will run.',
      'Step 1: Measuring Total Daily Energy Consumption (Watt-Hours). List every electrical appliance, its rated power in Watts, and the number of hours it operates daily. For example, a 150W refrigerator running 12 equivalent compressor hours consumes 1,800 Watt-hours (1.8 kWh) per day.',
      'Step 2: Accounting for System Conversion Efficiencies. No electrical system is 100% lossless. DC-to-AC inverters, MPPT charge controllers, and cabling introduce typical losses of 10% to 15%. A property needing 10 kWh of daily usable AC energy actually requires approximately 11.8 kWh of gross DC generation from the solar array.',
      'Step 3: Solar Irradiance and Peak Sun Hours (PSH). A 550W solar module does not produce 550W continuously from 6:00 AM to 6:00 PM. Solar production is modeled using "Peak Sun Hours"—the equivalent hours per day when solar irradiance averages 1,000 W/m². In West Africa, typical PSH ranges between 4.5 to 5.5 hours depending on geographic latitude and seasonal cloud cover.',
      'Step 4: Battery Storage and Depth of Discharge (DoD). Sizing batteries requires knowing how many hours or days of autonomy (cloudy days) you require. With modern LiFePO4 batteries, you can safely use 80% to 90% DoD. Older lead-acid batteries degrade rapidly if discharged beyond 50% DoD.'
    ],
    keyTakeaways: [
      'Inverter kVA indicates instantaneous power capacity; solar array and battery bank determine daily energy duration.',
      'Always design around genuine peak sun hours (typically 4.5 - 5.5 hours) rather than daylight duration.',
      'LiFePO4 batteries provide over 80% usable depth of discharge, making them far more compact and durable than lead-acid alternatives.'
    ]
  },
  {
    id: 'battery-storage-fundamentals-lifepo4-vs-lead-acid',
    title: 'Battery Storage Fundamentals: Why LiFePO4 Outperforms Traditional Gel and Lead-Acid Batteries',
    readTime: '5 min read',
    category: 'Energy Storage',
    date: 'December 2025',
    summary: 'A direct comparison of chemistry, cycle life, thermal safety, usable capacity, and long-term total cost of ownership between LiFePO4 and lead-acid batteries.',
    content: [
      'When investing in renewable energy storage, the upfront purchase price of lead-acid or gel batteries often seems tempting compared to lithium. However, when evaluating Levelized Cost of Storage (LCOS) over a 5 to 10 year timeline, Lithium Iron Phosphate (LiFePO4) proves significantly more economical.',
      '1. Cycle Life Comparison: Standard deep-cycle tubular or gel lead-acid batteries typically offer between 800 and 1,200 discharge cycles before their capacity drops below 70%. In a daily blackout scenario, this means replacement every 2 to 3 years. Quality LiFePO4 batteries deliver 6,000+ cycles at 80% Depth of Discharge, equating to 12 to 15 years of dependable daily operation.',
      '2. Usable Capacity and "Peukert Effect": If you have a 100Ah lead-acid battery, drawing heavy current (such as starting an air conditioner or pump) causes voltage sag and drastically reduces available capacity due to the Peukert effect. Furthermore, discharging lead-acid past 50% severely shortens its life. In contrast, LiFePO4 maintains a rock-solid flat voltage curve across 90% of its discharge cycle with zero memory effect.',
      '3. Space, Weight, and Thermal Safety: LiFePO4 is approximately one-third the weight and half the physical volume of an equivalent lead-acid bank. Crucially, unlike cobalt-based lithium chemistries used in consumer smartphones (NMC/LCO), LiFePO4 has exceptional thermal and chemical stability and will not catch fire even under severe puncture or electrical stress.'
    ],
    keyTakeaways: [
      'LiFePO4 provides 6,000+ operational cycles compared to under 1,200 cycles for lead-acid.',
      'Over a 10-year period, lead-acid batteries require 3 to 4 expensive replacements, making LiFePO4 substantially cheaper in lifetime cost.',
      'LiFePO4 chemistry is intrinsically non-combustible and includes integrated smart BMS cell monitoring.'
    ]
  },
  {
    id: 'essential-preventive-maintenance-solar-pv',
    title: 'Essential Preventive Maintenance: How to Maximize Solar PV Panel Longevity and Yield',
    readTime: '5 min read',
    category: 'Maintenance & Care',
    date: 'November 2025',
    summary: 'Best practices for keeping solar panels and balance-of-system equipment operating at peak output in tropical and dust-heavy environments.',
    content: [
      'Solar panels have no moving parts, leading many owners to believe they require zero maintenance. However, in regions subject to seasonal harmattan dust, industrial particulate fallout, and bird droppings, unmaintained arrays can suffer a 15% to 25% drop in electricity generation.',
      '1. Regular Module Cleaning: Dust and soiling act as an optical filter, blocking sunlight from reaching the silicon wafer cells. Clean panels using soft, non-abrasive microfiber brushes and de-ionized or soft water. Never use harsh chemical detergents, pressure washers, or abrasive sponges that scratch the anti-reflective glass coating. Always clean panels early in the morning or late in the afternoon when glass surfaces are cool to avoid thermal shock breakage.',
      '2. Hotspot Prevention and Shading Inspections: Overgrown tree branches or nearby antennas casting partial shadows across even one cell can cause that shaded cell to act as an electrical resistor. The unshaded cells force current through it, generating localized heat known as a "hotspot," which can permanently delaminate the panel and trigger bypass diode failure.',
      '3. Annual Electrical Thermography: Professional preventative maintenance includes infrared thermal scans of all electrical switchboards, combiner boxes, and inverter DC terminals. Loose cable lugs create high-resistance joints that overheat and cause arcing or fire hazards. Routine torque verification keeps your system fully protected.'
    ],
    keyTakeaways: [
      'Clean solar panels during cool hours with soft water and non-abrasive brushes; avoid midday washdowns.',
      'Eliminate localized shading immediately to prevent hotspots and cell degradation.',
      'Schedule annual thermal scans to verify electrical terminal torque and identify failing components early.'
    ]
  }
];

