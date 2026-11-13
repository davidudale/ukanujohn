import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'commercial-logistics-hub-45kw',
    title: '45kW Commercial Rooftop Solar & Hybrid Storage Installation',
    category: 'Commercial',
    location: 'Ikeja Industrial Zone, Lagos',
    capacity: '45kW Solar Array + 60kWh LiFePO4 BESS',
    overview: 'Engineering and deployment of a commercial-scale rooftop solar PV system for a 24-hour pharmaceutical storage and logistics warehouse requiring constant cold-chain refrigeration.',
    scopeOfWork: [
      'Structural integrity audit and reinforced rooftop ballast mounting',
      'Installation of 82 units of 550W Tier-1 Mono PERC modules',
      'Dual 25kVA synchronized 3-phase hybrid inverters with ATS',
      '60kWh LiFePO4 rack battery bank integration with existing diesel generator backup',
      'Real-time power quality logging and surge suppression deployment'
    ],
    equipmentInstalled: [
      '82 x 550W Monocrystalline PV Modules (45.1 kWp)',
      '2 x 25kVA 3-Phase Smart Hybrid Inverters',
      '4 x 15kWh Commercial LiFePO4 Rack Storage Units (60kWh)',
      'Heavy-duty industrial AC/DC switchgear and SPD protection'
    ],
    outcomes: [
      '78% reduction in monthly diesel generator fuel consumption',
      'Eliminated cold-room temperature fluctuations during grid outages',
      'Estimated project payback period of 3.2 years based on current fuel prices',
      'Zero hours of unplanned operational downtime since commissioning'
    ],
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2025'
  },
  {
    id: 'healthcare-clinic-maternity-30kw',
    title: '30kW Critical Power Solar Micro-System for Community Healthcare Center',
    category: 'Institutional',
    location: 'Central District, Abuja',
    capacity: '30kW Solar PV + 40kWh Energy Storage',
    overview: 'Mission-critical renewable energy system providing continuous power for patient wards, laboratory diagnostic analyzers, surgical illumination, and vaccine refrigeration.',
    scopeOfWork: [
      'Comprehensive hospital electrical audit and life-support circuit segregation',
      'Ground-mount and carport solar PV array construction',
      '30kW pure sine wave commercial inverter system installation',
      'Medical-grade zero-millisecond UPS transfer synchronization',
      'Staff technical orientation and preventive maintenance training'
    ],
    equipmentInstalled: [
      '56 x 550W Half-Cell Mono Solar Modules (30.8 kWp)',
      '3 x 10kW Hybrid Pure Sine Wave Inverters in parallel',
      '8 x 5.12kWh LiFePO4 Wall-Mount Battery Packs (40.96kWh)',
      'Carport structural steel mounts and underground armoring'
    ],
    outcomes: [
      '100% continuous power availability for neonatal incubators and operating theater',
      'Complete protection for sensitive hematology and biochemistry analyzers against brownouts',
      'Saves approximately 18,000 liters of diesel fuel annually',
      'Quiet, exhaust-free clinical environment for patients and healthcare practitioners'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2025'
  },
  {
    id: 'residential-executive-villa-15kva',
    title: '15kVA Premium Residential Hybrid Solar Architecture',
    category: 'Residential',
    location: 'Maitama, Abuja',
    capacity: '12kW Solar PV + 20.4kWh LiFePO4 Storage',
    overview: 'Turnkey residential solar installation for a 5-bedroom modern villa powering air conditioning units, borehole pumping system, security automation, and home appliances.',
    scopeOfWork: [
      'Detailed household appliance load survey and peak demand profiling',
      'Aesthetic rooftop solar layout with hidden conduit routing',
      '15kVA pure sine wave hybrid inverter with smart load shifting',
      '20.48kWh LiFePO4 wall-mounted modular battery system',
      'Comprehensive earthing and Type II lightning protection'
    ],
    equipmentInstalled: [
      '22 x 550W Tier-1 Mono Solar Panels (12.1 kWp)',
      '1 x 15kVA High-Efficiency Smart Hybrid Inverter',
      '4 x 5.12kWh LiFePO4 Wall-Mount Battery Modules (20.48kWh)',
      'Smart energy sub-metering and lightning protection'
    ],
    outcomes: [
      'Near-zero dependence on noisy neighborhood generator during frequent grid collapse',
      'All 4 inverter air conditioners running seamlessly on daytime solar generation',
      'Over 85% drop in grid electricity utility bills',
      'Peace of mind with silent, automated transition during blackouts'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2026'
  },
  {
    id: 'agricultural-irrigation-coldchain-25kw',
    title: '25kW Solar Irrigation & Post-Harvest Cold Hub for Commercial Farm',
    category: 'Agricultural',
    location: 'Keffi Agricultural Corridor, Nasarawa',
    capacity: '25kW Solar Array + 10 HP VFD Water Pumping',
    overview: 'Hybrid solar pumping and cold preservation facility empowering an organic vegetable and poultry farm to irrigate 15 hectares and store produce reliably.',
    scopeOfWork: [
      'Ground-mount tracking-optimized structural array construction',
      'Direct-solar Variable Frequency Drive (VFD) 7.5kW deep-well submersible pump installation',
      'Hybrid inverter and battery system dedicated to post-harvest cold room chillers',
      'Overhead power transmission from array to irrigation pump station'
    ],
    equipmentInstalled: [
      '46 x 550W High-Durability Monocrystalline Panels (25.3 kWp)',
      '1 x 7.5kW Solar VFD Pump Inverter (Battery-Free Operation)',
      '1 x 10kW Hybrid Inverter with 20.48kWh LiFePO4 Battery Bank',
      'Hot-dip galvanized ground-mounting frames'
    ],
    outcomes: [
      'Delivers over 120,000 liters of irrigation water daily using 100% solar energy',
      'Prevents post-harvest crop spoilage by powering 24/7 cold storage facility',
      'Zero fuel expenditure for irrigation, previously costing over ₦1.2M monthly in diesel',
      'Increased annual crop harvest cycles from 1 to 3 seasons per year'
    ],
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2025'
  },
  {
    id: 'educational-academy-campus-20kw',
    title: '20kW Educational Campus Solar & ICT Lab Power Infrastructure',
    category: 'Institutional',
    location: 'Garki, Abuja',
    capacity: '20kW Solar PV + 30kWh Battery Storage',
    overview: 'Clean, reliable energy system designed for a private secondary school and collegiate ICT center housing 60 desktop computers, science labs, and campus lighting.',
    scopeOfWork: [
      'School load audit during typical study hours and evening boarding periods',
      'Classroom roof solar array installation with vibration isolation',
      'Dual 10kW synchronized inverters with automated grid prioritizing',
      'Dedicated battery room installation with fire suppression and ventilation'
    ],
    equipmentInstalled: [
      '38 x 550W Tier-1 Mono Solar Modules (20.9 kWp)',
      '2 x 10kW Smart Hybrid Inverters',
      '6 x 5.12kWh LiFePO4 Battery Modules (30.72kWh)',
      'Industrial surge suppression and earth bonding pits'
    ],
    outcomes: [
      'Zero disruption to computer examinations (JAMB/CBT) and laboratory practicals',
      'Substantial cost savings re-allocated to academic supplies and student scholarships',
      'Demonstrates practical renewable energy principles to students on campus',
      'Quiet learning environment free from diesel fumes and vibration'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2026'
  },
  {
    id: 'corporate-office-headquarters-35kw',
    title: '35kW Corporate Office Solar PV & Backup System',
    category: 'Commercial',
    location: 'Victoria Island, Lagos',
    capacity: '35kW Rooftop PV + 45kWh LiFePO4 Energy Bank',
    overview: 'Comprehensive energy retrofit for a multi-floor corporate office building housing legal and financial advisory firms, reducing commercial electricity tariff overhead.',
    scopeOfWork: [
      'Power quality analysis to mitigate high neutral currents and harmonics',
      'Custom aluminum roof mounting over existing profile metal sheets',
      '35kW three-phase inverter network with cloud-ready monitoring interface',
      'Smart load priority programming (cooling, workstation circuits, and elevators)'
    ],
    equipmentInstalled: [
      '64 x 550W Monocrystalline PV Modules (35.2 kWp)',
      '1 x 35kW Three-Phase Hybrid Inverter',
      '3 x 15kWh High-Voltage Rack Batteries (45kWh)',
      'Main distribution board upgrade and digital energy metering'
    ],
    outcomes: [
      'Reduced monthly commercial utility and diesel generator spend by 72%',
      'Seamless executive meetings and video conferencing without UPS beeping or drops',
      'Enhanced corporate environmental governance and sustainability reporting score'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2025'
  }
];

