/**
 * Content for Eco Volt Electrical — remade from ecovoltelectric.com.
 * `company`, `clients`, and copy voice are grounded in the real site's published content
 * (About/Contact pages, fetched directly). Eco Volt does not hold its own electrical
 * license — it operates in partnership with Licensed Master Electricians for permits,
 * DOB filings, and final inspections. No years-in-business, license number, or client
 * list is published on the real site, so none are fabricated here.
 *
 * `capabilityMap` zone grid coordinates are grid-column/grid-row spans on a
 * 6-column x 4-row CSS Grid (matches BuildingExplorer.svelte's plan view).
 */

export const company = {
  name: 'Eco Volt Electrical',
  tagline: 'Reliable Energy, Smart Solutions.',
  city: 'New York City',
  phone: '(929) 990-8248',
  email: 'info@ecovoltelectric.com',
  partnership:
    'Eco Volt Electrical operates in partnership with Licensed Master Electricians for all permits, NYC Department of Buildings filings, and final inspections.'
};

export const team = [
  {
    id: 'estimator',
    name: 'Estimator',
    title: 'Project Scoping',
    bio: 'Plans every job with honesty and accuracy, so there are no surprises once work begins.',
    initials: 'ES'
  },
  {
    id: 'assistant',
    name: 'Assistant',
    title: 'Scheduling & Communication',
    bio: 'Keeps clients informed from first call to final walkthrough.',
    initials: 'AS'
  },
  {
    id: 'field-crew',
    name: 'Field Crew',
    title: 'Installation',
    bio: 'Hands-on experts who take pride in their craft, on-site for every job.',
    initials: 'FC'
  }
];

/** Who Eco Volt serves — sector categories, not named clients (none are published). */
export const clients = [
  { name: 'Homeowners', sector: 'Residential Properties' },
  { name: 'Property Managers', sector: 'Multi-Unit & Rental Buildings' },
  { name: 'Small Business Owners', sector: 'Retail & Commercial Space' },
  { name: 'General Contractors', sector: 'Trade Partnerships' }
];

export const services = [
  {
    id: 'residential',
    number: '01',
    name: 'Residential Electrical',
    summary: 'Panel upgrades, rewiring, and lighting for homes and multi-unit residential buildings across New York City.',
    points: [
      'Panel & sub-panel upgrades',
      'Full and partial rewiring',
      'Lighting circuits & fixture installation',
      'GFCI & safety code upgrades',
      'Ceiling fan & appliance circuits'
    ]
  },
  {
    id: 'commercial',
    number: '02',
    name: 'Commercial Installations',
    summary: 'Electrical work for offices, retail spaces, and small-to-large commercial buildouts.',
    points: [
      'Office & retail power distribution',
      'Lighting design & control systems',
      'Signage & storefront circuits',
      'Server & equipment room wiring',
      'Tenant fit-out electrical'
    ]
  },
  {
    id: 'efficiency',
    number: '03',
    name: 'Energy Efficiency Upgrades',
    summary: 'Smart, efficient electrical systems that lower operating costs over time.',
    points: [
      'LED retrofits',
      'Smart panel & switch installation',
      'EV charger-ready circuits',
      'Energy usage audits'
    ]
  },
  {
    id: 'compliance',
    number: '04',
    name: 'Code Compliance & Permitting',
    summary: "Every job filed and inspected in partnership with a Licensed Master Electrician, fully compliant with NYC DOB regulations.",
    points: [
      'NYC DOB permit filing',
      'Final inspection coordination',
      'Violation remediation',
      'Code compliance review'
    ]
  }
];

/**
 * Capability map for the homepage explorer: not a project history (Eco Volt hasn't
 * published one) but a blueprint-style showcase of the electrical work Eco Volt can
 * perform in each type of space, across residential, commercial, and retail properties.
 */
export const capabilityMap = [
  {
    id: 'residential',
    name: 'RESIDENTIAL BUILDING',
    description: 'From single units to full multi-family buildings — every space wired to code and built to last.',
    floors: [
      {
        number: 1,
        label: 'BASEMENT / MECHANICAL',
        zones: [
          { short: 'ELEC RM', name: 'Electrical Room', gc: '1 / 4', gr: '1 / 3', area: '180 SQ FT', services: ['Main panel & meter bank service', 'Sub-panel installation for common areas', 'Emergency lighting circuits'], desc: 'The building\'s main electrical distribution point — where every unit\'s power originates.' },
          { short: 'LAUNDRY', name: 'Laundry Room', gc: '4 / 7', gr: '1 / 3', area: '140 SQ FT', services: ['Dedicated appliance circuits', 'GFCI outlet installation', 'Exhaust fan & lighting wiring'], desc: 'Heavy-load appliances need dedicated, code-compliant circuits of their own.' },
          { short: 'BOILER', name: 'Boiler / Mechanical Room', gc: '1 / 4', gr: '3 / 5', area: '160 SQ FT', services: ['Equipment power hookups', 'Control wiring for HVAC systems'], desc: 'Mechanical equipment power and low-voltage control wiring.' },
          { short: 'STORAGE', name: 'Storage', gc: '4 / 7', gr: '3 / 5', area: '120 SQ FT', services: ['General lighting circuits'], desc: 'Simple, reliable lighting for storage and utility space.' }
        ]
      },
      {
        number: 2,
        label: 'GROUND FLOOR / LOBBY',
        zones: [
          { short: 'LOBBY', name: 'Lobby', gc: '1 / 5', gr: '1 / 3', area: '320 SQ FT', services: ['Accent & general lighting design', 'Intercom & buzzer wiring', 'Emergency egress lighting'], desc: 'First impression lighting, paired with the building\'s access systems.' },
          { short: 'MAIL', name: 'Mailroom', gc: '5 / 7', gr: '1 / 3', area: '90 SQ FT', services: ['Outlet installation', 'Lighting circuits'], desc: 'Standard circuits for a small, high-traffic space.' },
          { short: 'SUPER', name: "Superintendent's Office", gc: '1 / 4', gr: '3 / 5', area: '110 SQ FT', services: ['Outlet & lighting circuits'], desc: 'On-site office wired for day-to-day building operations.' },
          { short: 'ENTRY', name: 'Entrance & Egress', gc: '4 / 7', gr: '3 / 5', area: '150 SQ FT', services: ['Exterior lighting', 'Code-required egress lighting'], desc: 'Entry and exit points wired to NYC fire and safety code.' }
        ]
      },
      {
        number: 3,
        label: 'TYPICAL UPPER FLOOR',
        zones: [
          { short: 'KITCHEN', name: 'Kitchen', gc: '1 / 4', gr: '1 / 3', area: '150 SQ FT', services: ['Panel & circuit upgrades', 'GFCI outlet installation', 'Under-cabinet & task lighting', 'Appliance circuit wiring'], desc: 'The most-rewired room in any home — modern kitchens need modern circuits.' },
          { short: 'LIVING', name: 'Living Area', gc: '4 / 7', gr: '1 / 3', area: '280 SQ FT', services: ['General lighting circuits', 'Outlet additions', 'Smart switch & dimmer installation'], desc: 'Everyday living space, upgraded with smart lighting controls.' },
          { short: 'BEDROOM', name: 'Bedroom', gc: '1 / 3', gr: '3 / 5', area: '160 SQ FT', services: ['Outlet & lighting circuits', 'Ceiling fan wiring'], desc: 'Standard residential circuits, done right.' },
          { short: 'BATH', name: 'Bathroom', gc: '3 / 5', gr: '3 / 5', area: '70 SQ FT', services: ['GFCI outlet installation', 'Exhaust fan wiring', 'Vanity lighting'], desc: 'Wet-location wiring to code, every time.' },
          { short: 'HALL', name: 'Hallway', gc: '5 / 7', gr: '3 / 5', area: '90 SQ FT', services: ['Common-area lighting', 'Smoke & CO detector wiring'], desc: 'Circulation space wired for safety compliance.' }
        ]
      },
      {
        number: 4,
        label: 'ROOF',
        zones: [
          { short: 'RTU', name: 'Rooftop Equipment', gc: '1 / 4', gr: '1 / 4', area: '200 SQ FT', services: ['Equipment power hookups', 'Weatherproof outlet installation'], desc: 'Rooftop HVAC and equipment, wired for outdoor conditions.' },
          { short: 'ACCESS', name: 'Roof Access', gc: '4 / 7', gr: '1 / 4', area: '80 SQ FT', services: ['Egress & safety lighting'], desc: 'Access points lit and wired for code compliance.' }
        ]
      }
    ]
  },
  {
    id: 'commercial',
    name: 'COMMERCIAL OFFICE',
    description: 'Office buildouts and tenant fit-outs, from a single floor to a full building.',
    floors: [
      {
        number: 1,
        label: 'GROUND FLOOR / LOBBY',
        zones: [
          { short: 'LOBBY', name: 'Reception & Lobby', gc: '1 / 5', gr: '1 / 3', area: '400 SQ FT', services: ['Architectural lighting design', 'Access control wiring', 'Signage circuits'], desc: 'The first space a client sees — lit to make an impression.' },
          { short: 'SECURITY', name: 'Security Desk', gc: '5 / 7', gr: '1 / 3', area: '80 SQ FT', services: ['Dedicated outlet circuits', 'Camera & access system power'], desc: 'Power for security systems and monitoring equipment.' },
          { short: 'ELEV', name: 'Elevator Lobby', gc: '1 / 4', gr: '3 / 5', area: '150 SQ FT', services: ['General & emergency lighting'], desc: 'Circulation space wired to code.' },
          { short: 'ENTRY', name: 'Building Entrance', gc: '4 / 7', gr: '3 / 5', area: '120 SQ FT', services: ['Exterior lighting', 'Egress lighting'], desc: 'Entrances wired for safety and visibility.' }
        ]
      },
      {
        number: 2,
        label: 'TYPICAL OFFICE FLOOR',
        zones: [
          { short: 'OPEN', name: 'Open Office', gc: '1 / 4', gr: '1 / 3', area: '900 SQ FT', services: ['Workstation power circuits', 'Overhead & task lighting', 'Lighting control systems'], desc: 'Flexible power layouts for open-plan workspaces.' },
          { short: 'CONF', name: 'Conference Room', gc: '4 / 7', gr: '1 / 3', area: '260 SQ FT', services: ['AV & presentation power', 'Dimmable lighting circuits'], desc: 'Meeting spaces wired for presentation equipment.' },
          { short: 'IT', name: 'IT / Server Closet', gc: '1 / 3', gr: '3 / 5', area: '90 SQ FT', services: ['Dedicated server rack circuits', 'Backup power hookups'], desc: 'Isolated, clean power for sensitive equipment.' },
          { short: 'PRIVATE', name: 'Private Offices', gc: '3 / 5', gr: '3 / 5', area: '220 SQ FT', services: ['Outlet & lighting circuits', 'Smart switch installation'], desc: 'Individual offices wired for modern work.' },
          { short: 'BREAK', name: 'Break Room', gc: '5 / 7', gr: '3 / 5', area: '150 SQ FT', services: ['Dedicated appliance circuits', 'GFCI outlet installation'], desc: 'Kitchenette-grade circuits for shared appliances.' }
        ]
      },
      {
        number: 3,
        label: 'MECHANICAL / CORE',
        zones: [
          { short: 'ELEC RM', name: 'Electrical Room', gc: '1 / 4', gr: '1 / 3', area: '220 SQ FT', services: ['Main distribution & sub-metering', 'Tenant panel installation'], desc: 'Building-wide power distribution and tenant metering.' },
          { short: 'MECH', name: 'Mechanical Room', gc: '4 / 7', gr: '1 / 3', area: '260 SQ FT', services: ['HVAC equipment power', 'Control wiring'], desc: 'Power and controls for building mechanical systems.' },
          { short: 'ELEV MR', name: 'Elevator Machine Room', gc: '1 / 7', gr: '3 / 5', area: '180 SQ FT', services: ['Equipment power hookups', 'Emergency circuit wiring'], desc: 'Dedicated, code-required circuits for elevator systems.' }
        ]
      },
      {
        number: 4,
        label: 'ROOF',
        zones: [
          { short: 'RTU', name: 'Rooftop HVAC', gc: '1 / 4', gr: '1 / 4', area: '240 SQ FT', services: ['Equipment power hookups', 'Weatherproof wiring'], desc: 'Outdoor-rated circuits for rooftop mechanical units.' },
          { short: 'ACCESS', name: 'Roof Access', gc: '4 / 7', gr: '1 / 4', area: '80 SQ FT', services: ['Egress & safety lighting'], desc: 'Code-compliant access lighting.' }
        ]
      }
    ]
  },
  {
    id: 'retail',
    name: 'RETAIL STOREFRONT',
    description: 'Storefront and small-business electrical, built to draw customers in and keep operations running.',
    floors: [
      {
        number: 1,
        label: 'BASEMENT / STOCKROOM',
        zones: [
          { short: 'STOCK', name: 'Stockroom', gc: '1 / 5', gr: '1 / 3', area: '400 SQ FT', services: ['General lighting circuits', 'Outlet installation'], desc: 'Reliable lighting and power for inventory storage.' },
          { short: 'ELEC RM', name: 'Electrical Room', gc: '5 / 7', gr: '1 / 3', area: '100 SQ FT', services: ['Panel & sub-panel installation'], desc: 'The storefront\'s main electrical distribution point.' }
        ]
      },
      {
        number: 2,
        label: 'GROUND FLOOR / SALES',
        zones: [
          { short: 'FRONT', name: 'Storefront & Signage', gc: '1 / 4', gr: '1 / 3', area: '120 SQ FT', services: ['Illuminated signage circuits', 'Window display lighting'], desc: 'The circuits that make a storefront visible from the street.' },
          { short: 'SALES', name: 'Sales Floor', gc: '4 / 7', gr: '1 / 4', area: '600 SQ FT', services: ['Track & display lighting', 'Outlet additions for fixtures'], desc: 'Lighting layouts designed to show merchandise at its best.' },
          { short: 'POS', name: 'POS / Register Area', gc: '1 / 4', gr: '3 / 5', area: '80 SQ FT', services: ['Dedicated POS circuits', 'Security system wiring'], desc: 'Clean, isolated power for point-of-sale systems.' }
        ]
      },
      {
        number: 3,
        label: 'MEZZANINE / BACK OFFICE',
        zones: [
          { short: 'OFFICE', name: 'Back Office', gc: '1 / 4', gr: '1 / 3', area: '150 SQ FT', services: ['Outlet & lighting circuits'], desc: 'Standard circuits for day-to-day business operations.' },
          { short: 'BREAK', name: 'Break Room', gc: '4 / 7', gr: '1 / 3', area: '100 SQ FT', services: ['Dedicated appliance circuits', 'GFCI outlet installation'], desc: 'Small-scale kitchenette wiring for staff.' }
        ]
      }
    ]
  }
];

/**
 * No open roles are currently posted — the careers page renders an honest empty state.
 * @type {Array<{id: string, title: string, type: string, location: string, department: string, description: string, requirements: string[]}>}
 */
export const careers = [];

export const careersNote = "No open positions right now. We're a small crew and only hire when the work calls for it — check back, or send a speculative application below.";
