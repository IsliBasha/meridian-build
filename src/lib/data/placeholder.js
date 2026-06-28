/**
 * Placeholder data for Meridian Build scaffold.
 * Replace with real content before launch.
 * SVG room coordinates are for viewBox="0 0 580 380" floor plan.
 */

export const company = {
  name: 'Meridian Build',
  tagline: 'Commercial Construction & Electrical',
  city: 'New York City',
  established: 2009,
  address: '245 Park Avenue, Suite 1700, New York, NY 10167',
  phone: '+1 (212) 555-0194',
  email: 'projects@meridianbuild.com',
  license: 'NYC DOB License #EC-00419 · General Contractor #GC-7821',
  stats: [
    { value: '15+', label: 'Years Operating' },
    { value: '140+', label: 'Projects Completed' },
    { value: '35+', label: 'Specialists' },
    { value: '$480M+', label: 'Project Value Delivered' }
  ]
};

export const team = [
  {
    id: 'marco',
    name: 'Marco Castellano',
    title: 'Founder & CEO',
    bio: 'Twenty years in New York commercial construction. Previously led large-scale fit-out programs at Turner Construction before founding Meridian in 2009.',
    initials: 'MC'
  },
  {
    id: 'sarah',
    name: 'Sarah Chen',
    title: 'Director of Projects',
    bio: 'Columbia SEAS graduate. Manages concurrent multi-site programs across Manhattan and the outer boroughs. Specialist in phased occupancy coordination.',
    initials: 'SC'
  },
  {
    id: 'daniel',
    name: 'Daniel Torres',
    title: 'Lead Electrical Engineer',
    bio: 'Licensed Master Electrician, NYC. Fourteen years designing and commissioning high-density power systems for commercial and mixed-use developments.',
    initials: 'DT'
  },
  {
    id: 'angela',
    name: 'Angela Russo',
    title: 'Operations Director',
    bio: 'Oversees procurement, subcontractor relationships, and compliance across all active projects. Former project controls lead at Skanska USA.',
    initials: 'AR'
  }
];

export const clients = [
  { name: 'Related Companies', sector: 'Real Estate Development' },
  { name: 'Turner Construction', sector: 'General Contracting' },
  { name: 'Skanska USA', sector: 'Infrastructure' },
  { name: 'Forest City Realty', sector: 'Mixed-Use Development' },
  { name: 'Brookfield Properties', sector: 'Commercial Real Estate' },
  { name: 'L&L Holding Company', sector: 'Class A Office' }
];

export const services = [
  {
    id: 'electrical',
    number: '01',
    name: 'Electrical Installations',
    summary: 'High-density power distribution, emergency systems, and building-wide electrical infrastructure for commercial and mixed-use developments.',
    points: [
      'Primary & secondary power distribution',
      'Emergency power and UPS systems',
      'Building automation integration',
      'NYC DOB permit management',
      'Commissioning and load testing'
    ]
  },
  {
    id: 'construction',
    number: '02',
    name: 'Commercial Construction',
    summary: 'Ground-up and core-and-shell construction for office, retail, and mixed-use projects across New York City.',
    points: [
      'Ground-up commercial construction',
      'Core & shell development',
      'Structural build-out',
      'Phased occupancy programs',
      'Post-construction commissioning'
    ]
  },
  {
    id: 'fitout',
    number: '03',
    name: 'Fit-Out & Renovation',
    summary: 'Tenant improvement and complete interior renovation programs. Minimal disruption to occupied floors.',
    points: [
      'Class A office fit-out',
      'Retail and hospitality renovation',
      'Occupied-floor phasing',
      'MEP coordination',
      'Expedited permit processing'
    ]
  },
  {
    id: 'pm',
    number: '04',
    name: 'Project Management',
    summary: "Owner's representative and construction management services for clients who need independent oversight on complex programs.",
    points: [
      'Owner\'s representative services',
      'Contractor procurement & vetting',
      'Schedule and budget control',
      'Regulatory compliance tracking',
      'Stakeholder reporting'
    ]
  }
];

export const careers = [
  {
    id: 'foreman',
    title: 'Site Foreman',
    type: 'Full-time',
    location: 'New York, NY',
    department: 'Construction',
    description: 'Lead day-to-day site operations on a 40,000+ sq ft commercial fit-out in Midtown Manhattan. Coordinate subcontractors, enforce safety protocols, and report to the project manager.',
    requirements: [
      '5+ years commercial construction experience',
      'OSHA 30 certification',
      'Ability to read and interpret architectural drawings',
      'Experience managing subcontractor crews'
    ]
  },
  {
    id: 'electrician',
    title: 'Junior Electrician',
    type: 'Full-time',
    location: 'New York, NY',
    department: 'Electrical',
    description: 'Support licensed electricians on commercial installation projects across Manhattan. This is a hands-on apprenticeship-track role with direct mentorship from our lead team.',
    requirements: [
      'Electrician apprenticeship or trade school graduate',
      'NYC electrical worker license (or in progress)',
      'Familiarity with commercial wiring systems',
      'Physical ability to work on active construction sites'
    ]
  }
];

/**
 * Building explorer projects.
 * Room SVG coordinates map to viewBox="0 0 580 380".
 * Floor outline: x=20, y=20, w=540, h=340.
 */
export const explorerProjects = [
  {
    id: 'madison-avenue',
    name: '340 Madison Avenue',
    type: 'Commercial Office Fit-Out',
    location: 'Midtown Manhattan, NY',
    year: 2023,
    area: '42,000 sq ft',
    scope: 'Full electrical installation, Class A fit-out, 4 floors',
    floors: [
      {
        number: 4,
        label: 'Executive Level',
        rooms: [
          {
            id: 'R401', name: 'Open Plan Office', type: 'Office',
            area: 1080, floor: 4, orientation: 'South-West',
            svgX: 20, svgY: 20, svgW: 300, svgH: 200
          },
          {
            id: 'R402', name: 'Executive Suite', type: 'Private Office',
            area: 420, floor: 4, orientation: 'North-East',
            svgX: 320, svgY: 20, svgW: 240, svgH: 120
          },
          {
            id: 'R403', name: 'Board Room', type: 'Conference',
            area: 280, floor: 4, orientation: 'East',
            svgX: 320, svgY: 140, svgW: 240, svgH: 80
          },
          {
            id: 'R404', name: 'Reception', type: 'Common Area',
            area: 240, floor: 4, orientation: 'North',
            svgX: 20, svgY: 220, svgW: 200, svgH: 140
          },
          {
            id: 'R405', name: 'Services Corridor', type: 'Service',
            area: 180, floor: 4, orientation: 'South',
            svgX: 220, svgY: 220, svgW: 340, svgH: 140
          }
        ]
      },
      {
        number: 3,
        label: 'Operations Floor',
        rooms: [
          {
            id: 'R301', name: 'Operations Hub', type: 'Open Plan',
            area: 1200, floor: 3, orientation: 'South-West',
            svgX: 20, svgY: 20, svgW: 360, svgH: 200
          },
          {
            id: 'R302', name: 'Meeting Suite A', type: 'Conference',
            area: 280, floor: 3, orientation: 'North',
            svgX: 380, svgY: 20, svgW: 180, svgH: 200
          },
          {
            id: 'R303', name: 'IT Infrastructure', type: 'Technical',
            area: 140, floor: 3, orientation: 'East',
            svgX: 20, svgY: 220, svgW: 200, svgH: 140
          },
          {
            id: 'R304', name: 'Break Room', type: 'Common Area',
            area: 160, floor: 3, orientation: 'South',
            svgX: 220, svgY: 220, svgW: 160, svgH: 140
          },
          {
            id: 'R305', name: 'Storage', type: 'Service',
            area: 100, floor: 3, orientation: 'South-East',
            svgX: 380, svgY: 220, svgW: 180, svgH: 140
          }
        ]
      },
      {
        number: 2,
        label: 'Client Services',
        rooms: [
          {
            id: 'R201', name: 'Client Reception', type: 'Common Area',
            area: 320, floor: 2, orientation: 'North',
            svgX: 20, svgY: 20, svgW: 540, svgH: 100
          },
          {
            id: 'R202', name: 'Presentation Suite', type: 'Conference',
            area: 480, floor: 2, orientation: 'West',
            svgX: 20, svgY: 120, svgW: 260, svgH: 240
          },
          {
            id: 'R203', name: 'Consultant Office', type: 'Private Office',
            area: 200, floor: 2, orientation: 'East',
            svgX: 280, svgY: 120, svgW: 280, svgH: 120
          },
          {
            id: 'R204', name: 'Storage & Utilities', type: 'Service',
            area: 120, floor: 2, orientation: 'South-East',
            svgX: 280, svgY: 240, svgW: 280, svgH: 120
          }
        ]
      },
      {
        number: 1,
        label: 'Ground Floor',
        rooms: [
          {
            id: 'R101', name: 'Lobby', type: 'Common Area',
            area: 520, floor: 1, orientation: 'North',
            svgX: 20, svgY: 20, svgW: 540, svgH: 120
          },
          {
            id: 'R102', name: 'Security Station', type: 'Service',
            area: 60, floor: 1, orientation: 'East',
            svgX: 20, svgY: 140, svgW: 120, svgH: 220
          },
          {
            id: 'R103', name: 'Mail & Services', type: 'Service',
            area: 80, floor: 1, orientation: 'West',
            svgX: 140, svgY: 140, svgW: 140, svgH: 220
          },
          {
            id: 'R104', name: 'Tenant Lounge', type: 'Common Area',
            area: 480, floor: 1, orientation: 'South',
            svgX: 280, svgY: 140, svgW: 280, svgH: 220
          }
        ]
      }
    ]
  }
];
