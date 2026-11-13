import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'ukanu-pv-550w-mono',
    name: 'Tier-1 550W Monocrystalline Half-Cell PV Module',
    category: 'Solar Panels',
    capacityOrPower: '550W Rated Output',
    shortDescription: 'High-density monocrystalline PERC solar module engineered for superior yield under high ambient temperatures and diffuse low-light conditions.',
    specifications: {
      'Maximum Power (Pmax)': '550W',
      'Module Efficiency': '21.5%',
      'Cell Type': 'Monocrystalline Half-Cut PERC (144 Cells)',
      'Dimensions': '2278 x 1134 x 35 mm',
      'Weight': '28.5 kg',
      'Frame': 'Anodized Aluminum Alloy (Corrosion Resistant)',
      'Front Glass': '3.2mm Toughened Anti-Reflective Coating',
      'Mechanical Load': 'Front 5400 Pa / Rear 2400 Pa',
      'Warranty': '12-Year Product Workmanship, 25-Year Linear Power'
    },
    applications: [
      'Residential rooftop power systems',
      'Commercial & industrial warehouse arrays',
      'Ground-mounted utility solar fields',
      'Solar irrigation water pumping arrays'
    ],
    features: [
      'Lower temperature coefficient minimizes power loss in intense heat',
      'Anti-PID (Potential Induced Degradation) cell technology',
      'Certified resistance to salt mist, ammonia, and desert sand abrasion'
    ],
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'ukanu-inverter-hybrid-10kw',
    name: '10kW 48V Pure Sine Wave Smart Hybrid Inverter',
    category: 'Inverters',
    capacityOrPower: '10,000W / 10kVA',
    shortDescription: 'Multifunctional pure sine wave inverter combining high-voltage dual MPPT solar charging, battery backup, and automatic generator sync.',
    specifications: {
      'Continuous Rated Power': '10,000W / 10,000VA',
      'Surge Power (Peak)': '20,000VA (10 seconds)',
      'Nominal Battery Voltage': '48V DC',
      'MPPT Channels': 'Dual Independent MPPT Trackers',
      'Max PV Input Voltage': '500V DC (120V - 450V Operating)',
      'Max PV Array Power': '12,000W',
      'Transfer Time': '< 10 ms (UPS Grade Seamless Switch)',
      'Waveform': 'Pure Sine Wave (<3% THD)',
      'Communication': 'CAN / RS485 for Lithium BMS, WiFi & GPRS Ready'
    },
    applications: [
      'Modern homes with heavy cooling and refrigeration loads',
      'Medical laboratories, dental practices, and diagnostic centers',
      'Supermarkets, pharmacies, and office facilities',
      'Telecommunications base stations'
    ],
    features: [
      'Zero-second switchover prevents PC, server, and Wi-Fi resets',
      'Configurable AC/Solar charging priority via intuitive LCD screen',
      'Dry contact relay for automatic standby generator startup',
      'Integrated DC isolator and reverse polarity protection'
    ],
    image: 'https://images.unsplash.com/photo-1558441719-8b489c63f771?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'ukanu-battery-lifepo4-51v-100ah',
    name: '5.12kWh 51.2V 100Ah LiFePO4 Lithium Wall-Mount Battery',
    category: 'Battery Storage',
    capacityOrPower: '5.12 kWh Storage Capacity',
    shortDescription: 'Safe, ultra-long-lifespan Lithium Iron Phosphate battery module with built-in intelligent BMS and parallel scalability up to 15 units.',
    specifications: {
      'Nominal Energy': '5.12 kWh',
      'Nominal Voltage': '51.2V DC',
      'Rated Capacity': '100 Ah',
      'Chemistry': 'Lithium Iron Phosphate (LiFePO4)',
      'Cycle Life': '> 6,000 Cycles @ 80% Depth of Discharge (DoD)',
      'Recommended Charge/Discharge': '50A (100A Maximum)',
      'Operating Temperature': 'Charge: 0°C to 45°C | Discharge: -10°C to 55°C',
      'Parallel Expansion': 'Up to 15 packs in parallel (76.8 kWh total)',
      'Weight': '46 kg (Wall-mountable or Floor standing)'
    },
    applications: [
      'Residential energy storage for overnight comfort',
      'Server room and network UPS backup',
      'Off-grid farmsteads and weekend residences',
      'Light industrial energy buffering'
    ],
    features: [
      'Non-toxic, thermally stable LiFePO4 chemistry eliminates thermal runaway risks',
      'Intelligent BMS balances cells and guards against over-voltage, temperature, and short-circuits',
      'Direct protocol communication with major hybrid inverter brands',
      '10-year design lifespan with minimal maintenance requirement'
    ],
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'ukanu-inverter-commercial-30kw',
    name: '30kW Three-Phase High-Voltage Commercial Hybrid Inverter',
    category: 'Inverters',
    capacityOrPower: '30,000W / 3-Phase 400V',
    shortDescription: 'Heavy-duty 3-phase hybrid inverter designed for commercial power loads, factories, hospitals, and educational campuses.',
    specifications: {
      'AC Output': '3-Phase 400V / 230V (50Hz / 60Hz)',
      'Rated Output Power': '30,000W',
      'Max PV Input': '45,000W',
      'Battery Voltage Range': '160V - 800V High Voltage DC',
      'MPPT Inputs': '3 MPPTs with dual strings each (6 inputs)',
      'Maximum Efficiency': '98.4%',
      'Protection Class': 'IP65 (Outdoor Wall Mount Rated)',
      'Parallel Capability': 'Up to 4 units in parallel (120kW total)'
    },
    applications: [
      'Hospitals, surgical theaters, and diagnostic clinics',
      'Manufacturing plants and processing facilities',
      'Schools, university auditoriums, and administrative complexes',
      'Corporate headquarters and large multi-tenant buildings'
    ],
    features: [
      'High-voltage battery architecture reduces cable heating and increases conversion efficiency',
      'Independent phase output capability handles 100% unbalanced loads',
      'Built-in AFCI (Arc Fault Circuit Interrupter) for ultimate commercial fire safety'
    ],
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'ukanu-battery-rack-15kwh',
    name: '15.36kWh LiFePO4 High-Capacity Rack-Mount Storage Unit',
    category: 'Battery Storage',
    capacityOrPower: '15.36 kWh Energy Storage',
    shortDescription: 'Industrial-grade 19-inch standard server rack energy storage module engineered for heavy continuous power cycling in commercial environments.',
    specifications: {
      'Nominal Energy': '15.36 kWh (3 x 5.12kWh rack modules with master PDU)',
      'Nominal Voltage': '51.2V DC (or 153.6V Series HV configuration)',
      'Standard Rack Size': 'Standard 19-inch server cabinet footprint',
      'Cycle Life': '> 6,500 Cycles @ 80% DoD',
      'Cooling': 'Silent passive cooling and smart heat dissipation ducts',
      'BMS Protection': 'Over-current, over-charge, over-discharge, short-circuit, temperature monitor'
    },
    applications: [
      'Commercial banking branches and data servers',
      'Supermarkets and cold-storage operations',
      'Mini-grids and rural community electrification schemes',
      'Large estates and residential compounds'
    ],
    features: [
      'Hot-swappable module architecture simplifies future expansion',
      'Heavy-duty DC busbars and unified circuit breaker protection',
      'Clear digital LCD diagnostics screen showing individual cell voltages and state of charge'
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'ukanu-solar-pumping-vfd',
    name: 'Solar Water Pumping Inverter & VFD Controller (7.5kW)',
    category: 'Accessories',
    capacityOrPower: '7.5kW (10 HP Pump Capacity)',
    shortDescription: 'Advanced Variable Frequency Drive (VFD) solar water pump inverter designed to run submersible and surface water pumps directly from solar panels without batteries.',
    specifications: {
      'Rated Output Power': '7.5 kW (10 HP)',
      'Output Voltage': '3-Phase 380V / 415V AC',
      'Max DC Input Voltage': '800V DC (Recommended MPPT 450V - 600V)',
      'Efficiency': '> 99% MPPT Algorithm Tracking',
      'Protection': 'Dry run protection, tank full float switch, lightning protection'
    },
    applications: [
      'Agricultural irrigation and drip farming schemes',
      'Livestock watering and commercial fish farms',
      'Community borehole drinking water projects',
      'Commercial estate water supply'
    ],
    features: [
      'Operates 100% battery-free directly during sunlight hours, reducing capital expense',
      'Automatic sunrise start and sunset shutdown',
      'Dry-run sensor prevents motor burn-out if well water levels deplete'
    ],
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80',
    inStock: true
  }
];

