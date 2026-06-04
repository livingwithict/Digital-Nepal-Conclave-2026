export interface Speaker {
  id: string;
  name: string;
  title: string;
  company?: string;
  bio: string;
  avatarUrl?: string;
  tags?: string[];
  isKeynote?: boolean;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  subtitle?: string;
  description?: string;
  speakerNames?: string[];
  category: "Inaugural" | "Governance" | "Data" | "Economy" | "Break";
  room?: string;
}

export interface PastEvent {
  year: string;
  theme: string;
  organizer: string;
  description: string;
  partners?: string[];
  stats?: { label: string; value: string }[];
  highlightVideos: { title: string; url: string; id: string }[];
  photoDriveLink: string;
  reportPublicationId?: string;
}

export interface Publication {
  id: string;
  title: string;
  year: string;
  type: "Report" | "Booklet" | "Magazine";
  coverUrl: string;
  pdfUrl?: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  category: "Board" | "Specialist" | "Patron";
  description?: string;
  avatarText?: string;
}

export const STATS_COUNTERS = [
  { id: "p-exp", label: "Participants Expected", count: "500+", desc: "Visionaries and decision-makers from across sectors" },
  { id: "spk", label: "Distinguished Speakers", count: "30+", desc: "National leaders, tech creators, and global visionaries" },
  { id: "key", label: "Keynote Speakers", count: "3+", desc: "Global perspectives and national change agendas" },
  { id: "sub-t", label: "Thematic Tracks", count: "4+", desc: "In-depth sessions on governance, data, & AI" },
  { id: "pan-sam", label: "Power Samvads & Panels", count: "5+", desc: "Forums enabling crucial strategic dialogue" }
];

export const TRANSFORMATIVE_PILLARS = [
  {
    title: "Governance & Digital Public Infrastructure",
    icon: "ShieldAlert",
    highlights: [
      "Institutional digital reform and transformative public service delivery.",
      "Citizen-centric smart services and integrated Digital ID frameworks.",
      "Strategic policy innovation and evidence-based decision making through data-centric governance."
    ]
  },
  {
    title: "Data, AI & Cybersecurity",
    icon: "Database",
    highlights: [
      "Establishing national data sovereignty and robust governance frameworks.",
      "Ethical AI integration and responsible technology adoption.",
      "Building digital trust, cybersecurity resilience, and cross-sectoral data interoperability."
    ]
  },
  {
    title: "Digital Economy & Innovation",
    icon: "TrendingUp",
    highlights: [
      "Advancing fintech ecosystems and digital payment architecture.",
      "Fostering startup acceleration and optimizing digital trade and e-commerce expansion.",
      "Cultivating a future-ready digital workforce and investment prospects within the innovation economy."
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Mr. Razan Lamsal", role: "Chairperson", category: "Board", avatarText: "RL" },
  { name: "Mr. Hempal Shrestha", role: "Knowledge Management Specialist", category: "Specialist", avatarText: "HS" },
  { name: "Mr. Sushil Pokharel", role: "Executive Board Member", category: "Board", avatarText: "SP" },
  { name: "Er. Nidesh Maskey", role: "Executive Member", category: "Board", avatarText: "NM" },
  { name: "Mr. Hariram Rimal", role: "Executive Member", category: "Board", avatarText: "HR" },
  { name: "Ms. Krishpana Poudel", role: "Operations Lead", category: "Specialist", avatarText: "KP" },
  { name: "Mr. Sujal Bhakta Shrestha", role: "Coordination Executive", category: "Specialist", avatarText: "SS" },
  { name: "Er. Kabir Rajbanshi", role: "Technical Analyst", category: "Specialist", avatarText: "KR" },
  { name: "Ms. Rachana Kharel", role: "Communications Lead", category: "Specialist", avatarText: "RK" }
];

export const PATRONS: TeamMember[] = [
  { name: "Er. Ganesh Shah", role: "Ex-Minister, Ministry of Science and Technology, GoN", category: "Patron" },
  { name: "Mr. Manohar Kr. Bhattarai", role: "Chairperson, Internet Governance Institute (Former Vice-Chairperson, HLCIT)", category: "Patron" },
  { name: "Prof. Dr. Subarna Shakya", role: "Director, Innovation Center (Tribhuvan University)", category: "Patron" },
  { name: "Prof. Dr. Manish Pokharel", role: "Dean, School of Engineering (Kathmandu University)", category: "Patron" },
  { name: "Mr. Birendra Kumar Mishra", role: "Former Joint Secretary, MoCIT, GoN", category: "Patron" },
  { name: "Mr. Vivek S. Rana", role: "ICT/MIS Consultant, Asian Development Bank (ADB)", category: "Patron" },
  { name: "Mr. Ananda Raj Khanal", role: "Senior ICT Expert & Consultant", category: "Patron" }
];

export const SPEAKERS_LIST: Speaker[] = [
  {
    id: "biswas-dhakal",
    name: "Mr. Biswas Dhakal",
    title: "Tech Entrepreneur & President",
    company: "F1Soft International Pvt. Ltd.",
    bio: "He is a Nepali tech entrepreneur. He serves as the President of F1Soft International Pvt. Ltd, an ecosystem of digital products and services that facilitates Nepali consumers' access to financial services. His journey began in 2004 when he founded F1Soft. He founded eSewa (digital wallet company) in 2009, CashOnAd, Logica Beans, and Shiran Technologies Pvt. Ltd. Dhakal was selected by The US Department of State for the International Visitor Leadership Program (IVLP) and the Global Entrepreneurship Summit 2016 from Nepal.",
    avatarUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=300&h=300",
    tags: ["Fintech", "Entrepreneurship", "Digital Assets"],
    isKeynote: true,
    linkedinUrl: "https://linkedin.com/in/biswasdhakal",
    twitterUrl: "https://twitter.com/biswasdhakal"
  },
  {
    id: "manohar-bhattarai",
    name: "Mr. Manohar K Bhattarai",
    title: "Former Vice-Chairperson",
    company: "HLCIT (ICT Expert)",
    bio: "Manohar K. Bhattarai is a prominent ICT expert in Nepal who has served in various highly influential roles including the Vice-Chairperson of High Level Commission for Information Technology (HLCIT). He is an advocate for data-centric governance and framework deployment in emerging economies.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
    tags: ["Policy", "Smart Governance", "ICT Core"],
    linkedinUrl: "https://linkedin.com/in/manohar-bhattarai",
    twitterUrl: "https://twitter.com/manohar_b"
  },
  {
    id: "manish-pokharel",
    name: "Prof. Dr. Manish Pokharel",
    title: "Dean",
    company: "Kathmandu University (Patron, IFN)",
    bio: "Dean at School of Engineering, Kathmandu University. Prof. Dr. Pokharel has significantly contributed to standardizing tech education and cloud-computing infrastructure guidelines in Kathmandu and Nepal's sub-regions.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
    tags: ["Academics", "Cloud Infrastructure", "E-Governance"],
    linkedinUrl: "https://linkedin.com/in/manish-pokharel",
    twitterUrl: "https://twitter.com/manish_p"
  },
  {
    id: "kyle-gardner",
    name: "Mr. Kyle Gardner",
    title: "Government Affairs & Public Policy Lead",
    company: "Google (South Asia)",
    bio: "Coordinates strategic dialogues representing public sector initiatives, AI integration framework policy parameters, and tech adoption synergy inside Nepal and South Asian emerging digital economies.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
    tags: ["Global Policies", "Big Tech", "AI Sovereignity"],
    isKeynote: true,
    linkedinUrl: "https://linkedin.com/in/kyle-gardner-google",
    twitterUrl: "https://twitter.com/kyleg_policy"
  },
  {
    id: "gagan-thapa",
    name: "Hon. Gagan Thapa",
    title: "Member of Parliament & General Secretary",
    company: "Nepali Congress",
    bio: "A highly progressive national leader advocating for 'faceless' digital governments, automated bureaucratic reform, and transparent public service delivery systems in Nepal.",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300",
    tags: ["Public Leadership", "Governance", "100-Days Agendas"],
    linkedinUrl: "https://linkedin.com/in/gagan-thapa",
    twitterUrl: "https://twitter.com/gagan-thapa"
  },
  {
    id: "ek-narayan",
    name: "Mr. Ek Narayan Aryal",
    title: "Former Chief Secretary",
    company: "Government of Nepal",
    bio: "Pioneered unified systemic integration in civil registers and smart public service channels. Argues that actual digital capability thrives on interoperable backend data exchanges.",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
    tags: ["Public Service", "DPI", "System Integration"],
    linkedinUrl: "https://linkedin.com/in/ek-narayan-aryal",
    twitterUrl: "https://twitter.com/aryaleknarayan"
  },
  {
    id: "nishant-nair",
    name: "Mr. Nishant Nair",
    title: "Head of Street View Outsourced Operations",
    company: "Google Maps",
    bio: "Led the milestone national deployment of Google Street View services in Nepal, supporting modern digital tourism, navigation, and location-based economies.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
    tags: ["Geo-Tech", "Digital Maps", "Spatials"],
    linkedinUrl: "https://linkedin.com/in/nishant-nair-gmaps",
    twitterUrl: "https://twitter.com/nishantnair"
  },
  {
    id: "nilesh-pradhan",
    name: "Mr. Nilesh Man Singh Pradhan",
    title: "CEO",
    company: "Nepal Clearing House Ltd. (NCHL)",
    bio: "Pioneered core retail transaction integration and digital payments architectures, pushing forward secure instant-payment gateways and international money linkages.",
    avatarUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=300&h=300",
    tags: ["Fintech", "National Gateway", "Digital Economy"],
    linkedinUrl: "https://linkedin.com/in/nilesh-pradhan-nchl",
    twitterUrl: "https://twitter.com/nilesh_pradhan"
  }
];

export const AGENDA_DATA: AgendaItem[] = [
  {
    time: "9:00 AM – 9:30 AM",
    title: "Delegate Registration & Welcome Reception",
    subtitle: "Exhibition Zone & Startup Pavilion Open",
    description: "Welcome of participants, national policy creators, and sector champions. Exhibition space and coffee network opens.",
    category: "Break",
    room: "Grand Foyer & B2B Exhibition Zone"
  },
  {
    time: "9:30 AM – 10:00 AM",
    title: "Inaugural Session: Lighting the Digital Path",
    subtitle: "Launch Ceremony of Digital Nepal Conclave 2026",
    description: "Traditional lamp lighting, formal addresses from organizers, governmental patrons, and launching of Digital Paridrishya Vol 3.",
    category: "Inaugural",
    room: "Sagarmatha Plenary Hall"
  },
  {
    time: "10:00 AM – 10:20 AM",
    title: "Keynote I: National Perspectives",
    subtitle: "“The Trajectory of Nepal’s Digital Progress: Strategic Essentials”",
    description: "A deep dive into structural blockages and accomplishments since the first iteration in 2019.",
    speakerNames: ["Mr. Manohar K Bhattarai"],
    category: "Inaugural",
    room: "Sagarmatha Plenary Hall"
  },
  {
    time: "10:20 AM – 10:45 AM",
    title: "Keynote II: Global Perspectives",
    subtitle: "“Transformative Digital Paradigms: Success Drivers for Emerging Economies”",
    description: "Best practices, AI policies, and digital public goods frameworks suitable for south Asia.",
    speakerNames: ["Mr. Kyle Gardner"],
    category: "Inaugural",
    room: "Sagarmatha Plenary Hall"
  },
  {
    time: "10:45 AM – 12:00 PM",
    title: "Power Samvad @ DNC: Governance & Digital Public Infrastructure",
    subtitle: "“Nepal’s Digital Transformation Agenda; Reimagining Governance”",
    description: "Focusing on inter-departmental collaboration, system interoperability, and structural mandates of Digital Nepal Framework.",
    speakerNames: ["Mr. Ek Narayan Aryal", "Hon. Gagan Thapa", "Prof. Dr. Manish Pokharel"],
    category: "Governance",
    room: "Sagarmatha Plenary Hall"
  },
  {
    time: "12:00 PM – 12:45 PM",
    title: "Strategic Panel I: Redefining Digital Governance Architecture",
    subtitle: "“Citizen-Centric Services: 100 Days, 100 Agendas for a Digital Nation”",
    description: "A lightning conversation mapping swift, transparent public-facing service items.",
    category: "Governance",
    room: "Track Room A (Monal)"
  },
  {
    time: "12:45 PM – 1:30 PM",
    title: "Networking Lunch & Exhibition Hour",
    subtitle: "Exhibition Hall & Startup Demos",
    description: "Visit 20+ specialized stalls showing cutting-edge solutions from GIS mapping to health systems.",
    category: "Break",
    room: "Exhibition Pavilion & Garden Cafe"
  },
  {
    time: "1:30 PM – 1:45 PM",
    title: "Nepal Startup Launchpad",
    subtitle: "Innovative Solutions in Governance & Data (Pitches 1-3)",
    description: "Nepalese tech teams present smart city solutions and workflow optimization systems for governance.",
    category: "Economy",
    room: "Track Room B (Lophophorus)"
  },
  {
    time: "1:45 PM – 2:00 PM",
    title: "Lightning Talk: AI & Evolving Technological Frontiers",
    subtitle: "“Ethical AI Integration for Smart Governance: Leveraging Frontier Tech as a Strategic Enabler”",
    description: "Understanding LLMs and custom deep tech boundaries to simplify workflows for state platforms.",
    category: "Data",
    room: "Sagarmatha Plenary Hall"
  },
  {
    time: "2:00 PM – 3:00 PM",
    title: "Strategic Panel II: Paradigms of Data Governance",
    subtitle: "“Establishing Data Sovereignty, Uniform Standards, and Robust Architectures”",
    description: "Highlighting cloud regulations, local hosting security acts, and user privacy in health and financial ecosystems.",
    category: "Data",
    room: "Track Room A (Monal)"
  },
  {
    time: "3:00 PM – 3:30 PM",
    title: "Networking Tea Break",
    subtitle: "B2B Deals & Interaction Sessions",
    category: "Break",
    room: "Networking Alcove"
  },
  {
    time: "3:30 PM – 4:00 PM",
    title: "Nepal Startup Launchpad (Part II)",
    subtitle: "Deep Tech & Financial Innovation (Pitches 4-6)",
    description: "Accelerated presentation of young Nepalese financial ventures before major capital investors.",
    category: "Economy",
    room: "Track Room B (Lophophorus)"
  },
  {
    time: "4:00 PM – 4:30 PM",
    title: "Keynote III: Building Nepal’s Digital Economy",
    subtitle: "“A Framework for Broad-Based Prosperity and Global Alignment”",
    speakerNames: ["Mr. Biswas Dhakal"],
    category: "Economy",
    room: "Sagarmatha Plenary Hall"
  },
  {
    time: "4:30 PM – 5:30 PM",
    title: "Strategic Panel III: Re-envisioning the Digital Economy",
    subtitle: "“Expediting Nepal's Digital Economy: Resource Mobilization and Global Strategic Partnerships”",
    description: "Focus on global IT exports, retaining young engineers, and cross-border payment solutions.",
    speakerNames: ["Mr. Nilesh Man Singh Pradhan"],
    category: "Economy",
    room: "Sagarmatha Plenary Hall"
  },
  {
    time: "5:30 PM – 6:30 PM",
    title: "Closing Power Samvad @ DNC",
    subtitle: "“Mobilizing Capital for Digital Transformation”",
    description: "Synthesizing next actionable items. Signing cross-sector agreements.",
    category: "Inaugural",
    room: "Sagarmatha Plenary Hall"
  },
  {
    time: "6:30 PM Onwards",
    title: "Closing Note & The Road to DNC 2027",
    subtitle: "Interactive Feedback & Networking Drinks",
    category: "Break",
    room: "Exhibition Pavilion & Garden Cafe"
  }
];

export const PAST_EVENTS_DATA: PastEvent[] = [
  {
    year: "2025",
    theme: "Empowering Digital Nepal Together / Digital Synergy: Transforming Governance, Economy, and Society",
    organizer: "ICT Foundation Nepal (In Association with TingTing, Powered by Raindrop)",
    description: "The Digital Nepal Conclave 2025 successfully brought together over 600 senior representatives, policymakers, and international experts to discuss interoperability and system integration. High-level leadership session featured Prime Minister KP Sharma Oli, Finance Minister Bishnu Paudel, and leader Gagan Thapa advocating a 'faceless' electronic governance framework. Google officially launched Google Street View in Nepal during this edition.",
    stats: [
      { label: "Attendees", value: "600+" },
      { label: "Speakers", value: "35+" },
      { label: "Tracks", value: "8 Sessions" }
    ],
    photoDriveLink: "https://drive.google.com/drive/folders/1KcScPsk-RBxhZqKj4OAW0w2Xk90ONZ_C?usp=drive_link",
    highlightVideos: [
      { id: "v25_1", title: "Inaugural Plenary: Digital Governance & Leadership", url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6qB5knF0c0N8c3_ZVNRxPfv" },
      { id: "v25_2", title: "Parallel: Readiness for Digital Foundation", url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6pg4kXbXIU6UDGxKq0uGGAC" }
    ]
  },
  {
    year: "2024",
    theme: "Harmonizing Digitalization and Development",
    organizer: "ICT Foundation Nepal (In Association with Ncell, Powered by The Asia Foundation)",
    description: "Inaugurated by Prime Minister Pushpa Kamal Dahal. The state declared the decade of IT development, proposing over 1.5 million direct/indirect careers with a trade goal of 3 trillion Rupees export. Featured interactive showcases of over 20 advanced local initiatives like GeoKrishi, Nagarik App, and municipal models.",
    stats: [
      { label: "Attendees", value: "600+" },
      { label: "Showcased Ideas", value: "20+" },
      { label: "Panels", value: "5 Major Sessions" }
    ],
    photoDriveLink: "https://drive.google.com/drive/folders/1KcScPsk-RBxhZqKj4OAW0w2Xk90ONZ_C?usp=drive_link",
    highlightVideos: [
      { id: "v24_1", title: "Driving Digitalization and Development", url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6qZZ3QSOs2jQC6F9HRCCnDS" },
      { id: "v24_2", title: "Digital Governance & Data for Development", url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6o4l9T4iqGYqj4d0_yITTHr" }
    ]
  },
  {
    year: "2023",
    theme: "Fostering Digitally Sakshyam Nepal",
    organizer: "ICT Foundation Nepal (In Association with Huawei, Powered by Yarsa)",
    description: "Shifted the national dialogue directly from mere raw telecom cabling towards human potential capacity building, education synergy, and regional capability models to sustain software trade growth.",
    stats: [
      { label: "Speakers", value: "70+" },
      { label: "Sessions", value: "15+" },
      { label: "Days", value: "2 Full Days" }
    ],
    photoDriveLink: "https://drive.google.com/drive/folders/1KcScPsk-RBxhZqKj4OAW0w2Xk90ONZ_C?usp=drive_link",
    highlightVideos: [
      { id: "v23_1", title: "DNC 2023 Inaugural Plenary Live Stream", url: "https://www.youtube.com/live/dv-CsOcIojQ?si=KFABJLMiK-2b4VDx" },
      { id: "v23_2", title: "DNC 2023 Day 1 Technical Sessions", url: "https://www.youtube.com/live/jJmOXihX-Jc?si=frMQR2MyupB0Q6F-" }
    ]
  },
  {
    year: "2022",
    theme: "Digital Nepal Framework Collaboration",
    organizer: "ICT Foundation Nepal (In Association with Huawei & InfoDevelopers)",
    description: "The historical first major physical convergence following the publication of the unified Digital Nepal blueprint. Brought international models to cross-pollinate with central planning policies.",
    stats: [
      { label: "Speakers", value: "60+" },
      { label: "Countries represented", value: "5" },
      { label: "Working Papers", value: "17 Papers" }
    ],
    photoDriveLink: "https://drive.google.com/drive/folders/1KcScPsk-RBxhZqKj4OAW0w2Xk90ONZ_C?usp=drive_link",
    highlightVideos: [
      { id: "v22_1", title: "Historical Launch Video - DNC 2022", url: "https://www.youtube.com/live/VrZ_jsP7n3U?si=cnPi1AgKjDWaZxCm" },
      { id: "v22_2", title: "Strategic Keynotes - Day 2 Session", url: "https://www.youtube.com/live/3s1MwYfOpX8?si=nqoJVJfU16Cv8yhE" }
    ]
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "dnc-25",
    title: "Digital Nepal Conclave Report 2025",
    year: "2025",
    type: "Report",
    coverUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400&h=500",
    description: "Comprehensive summary of the 2025 conclave containing policy directives on systems integration, summary of Google Street View launch, and digital health blueprints."
  },
  {
    id: "dnc-24",
    title: "Digital Nepal Conclave Report 2024",
    year: "2024",
    type: "Report",
    coverUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400&h=500",
    description: "Highlights from Prime Minister Dahal's inaugural program regarding the 'Decade of IT' and plans to generate over 1.5 million regional jobs."
  },
  {
    id: "dnc-23",
    title: "Digital Nepal Conclave Report 2023",
    year: "2023",
    type: "Report",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400&h=500",
    description: "Strategic papers examining 'Digital Capability' (Sakshyam Nepal) as the ultimate prerequisite to sustainable digital economy growth."
  },
  {
    id: "dnc-22",
    title: "Digital Nepal Conclave Report 2022",
    year: "2022",
    type: "Report",
    coverUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=400&h=500",
    description: "The foundational report cataloging 17 strategic working papers on expanding fiber backbones, regional server sites, and secure fintech APIs."
  },
  {
    id: "paridrishya-1",
    title: "Digital Paridrishya - Vol 1",
    year: "2024",
    type: "Booklet",
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400&h=500",
    description: "A comprehensive digital catalog tracking smart transformation achievements and provincial readiness scores across all 7 states of Nepal."
  },
  {
    id: "paridrishya-2",
    title: "Digital Paridrishya - Vol 2",
    year: "2025",
    type: "Booklet",
    coverUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400&h=500",
    description: "The updated landscape document analyzing structural changes in remote sectors, cybersecurity measures, and local government digital services."
  }
];

export const NEWS_MEDIA_DATA = [
  {
    id: "news-1",
    title: "Digital Nepal Conclave 2026 announced: Theme Reimagining Governance, Data & AI",
    source: "Living with ICT",
    date: "May 28, 2026",
    summary: "ICT Foundation Nepal announces the fifth edition of Digital Nepal Conclave bringing policymakers, global heads, and tech visionaries under one platform on 3rd July 2026.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500&h=300",
    url: "https://livingwithict.com"
  },
  {
    id: "news-2",
    title: "Prime Minister advocates 'Digital Sovereignity' for upcoming conclave",
    source: "Hamro Patro",
    date: "June 02, 2026",
    summary: "Addressing national coordinators, the state highlights the need to build trustworthy cloud frameworks, robust payment solutions, and ethical AI integration.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500&h=300",
    url: "https://hamropatro.com"
  },
  {
    id: "news-3",
    title: "How regional conclaves are shaping localized Nepalese developer ecosystems",
    source: "ICT Gyan",
    date: "May 15, 2026",
    summary: "From Karnali to Madhesh, decentralized policy forums lay the groundwork for a unified digital standard presented at the federal summit.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=500&h=300",
    url: "https://ictfoundation.org.np"
  }
];
