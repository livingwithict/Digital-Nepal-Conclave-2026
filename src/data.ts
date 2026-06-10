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

export interface Publication {
  id: string;
  title: string;
  year: string;
  type: "Report" | "Booklet" | "Magazine";
  coverUrl: string;
  pdfUrl?: string;
  description: string;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  category: "Team" | "Patron";
  description?: string;
  avatarText?: string;
  imageUrl?: string;
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
  { name: "Mr. Razan Lamsal", role: "Chairperson", category: "Team", avatarText: "RL", imageUrl: "/images/team/Razan-Lamsal.jpg", },
  { name: "Mr. Hempal Shrestha", role: "Knowledge Management Specialist", category: "Team", avatarText: "HS", imageUrl: "/images/team/Hempal Shrestha.jpg", },
  { name: "Mr. Sushil Pokharel", role: "", category: "Team", avatarText: "SP", imageUrl: "/images/team/Sushil Pokharel.jpg", },
  { name: "Mr. Hariram Rimal", role: "", category: "Team", avatarText: "HR", imageUrl: "/images/team/Hariram Rimal.jpg", },
  { name: "Ms. Krishpana Poudel", role: "", category: "Team", avatarText: "KP", imageUrl: "/images/team/Krishpana Poudel.jpg", },
  { name: "Mr. Sujal Bhakta Shrestha", role: "", category: "Team", avatarText: "SS", imageUrl: "/images/team/Sujal Bhakta Shrestha.jpg", },
  { name: "Er. Kabir Rajbanshi", role: "", category: "Team", avatarText: "KR", imageUrl: "/images/team/Kabir Rajbanshi.jpg", },
  { name: "Ms. Rachana Kharel", role: "", category: "Team", avatarText: "RK", imageUrl: "/images/team/Rachana Kharel.jpg", }
];

export const PATRONS: TeamMember[] = [
  { name: "Er. Ganesh Shah", role: "Ex-Minister, Ministry of Science and Technology, GoN", category: "Patron", imageUrl: "/images/team/Ganesh Shah.jpg", },
  { name: "Mr. Manohar Kr. Bhattarai", role: "Chairperson, Internet Governance Institute (Former Vice-Chairperson, HLCIT)", category: "Patron", imageUrl: "/images/team/Manohar Bhattarai.jpg", },
  { name: "Prof. Dr. Subarna Shakya", role: "Director, Innovation Center (Tribhuvan University)", category: "Patron", imageUrl: "/images/team/Subarna Shakya.jpg", },
  { name: "Prof. Dr. Manish Pokharel", role: "Dean, School of Engineering (Kathmandu University)", category: "Patron", imageUrl: "/images/team/Manish Pokharel.jpg", },
  { name: "Mr. Birendra Kumar Mishra", role: "Former Joint Secretary, MoCIT, GoN", category: "Patron", imageUrl: "/images/team/Birendra Mishra.jpg", },
  { name: "Mr. Vivek S. Rana", role: "ICT/MIS Consultant, Asian Development Bank (ADB)", category: "Patron", imageUrl: "/images/team/Vivek Rana.jpg", },
  { name: "Mr. Ananda Raj Khanal", role: "Senior ICT Expert & Consultant", category: "Patron", imageUrl: "/images/team/Ananda Raj Khanal.jpg", },
  { name: "Mrs. Guna Keshari Pradhan", role: "", category: "Patron", imageUrl: "/images/team/Guna Keshari.jpg", }
];

export const SPEAKERS_LIST: Speaker[] = [
  {
    id: "biswas-dhakal",
    name: "Mr. Biswas Dhakal",
    title: "Tech Entrepreneur & President",
    company: "F1Soft International Pvt. Ltd.",
    bio: "He is a Nepali tech entrepreneur. He serves as the President of F1Soft International Pvt. Ltd, an ecosystem of digital products and services that facilitates Nepali consumers' access to financial services. His journey began in 2004 when he founded F1Soft. He founded eSewa (digital wallet company) in 2009, CashOnAd, Logica Beans, and Shiran Technologies Pvt. Ltd. Dhakal was selected by The US Department of State for the International Visitor Leadership Program (IVLP) and the Global Entrepreneurship Summit 2016 from Nepal.",
    avatarUrl: "/images/speakers/biswas-dhakal.jpg",
    tags: ["Fintech", "Entrepreneurship", "Digital Assets"],
    isKeynote: true,
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "manohar-bhattarai",
    name: "Mr. Manohar K Bhattarai",
    title: "Former Vice-Chairperson",
    company: "HLCIT (ICT Expert)",
    bio: "Manohar K. Bhattarai is a prominent ICT expert in Nepal who has served in various highly influential roles including the Vice-Chairperson of High Level Commission for Information Technology (HLCIT). He is an advocate for data-centric governance and framework deployment in emerging economies.",
    avatarUrl: "/images/speakers/manohar-bhattarai.jpg",
    tags: ["Policy", "Smart Governance", "ICT Core"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "manish-pokharel",
    name: "Prof. Dr. Manish Pokharel",
    title: "Dean",
    company: "Kathmandu University (Patron, IFN)",
    bio: "Dean at School of Engineering, Kathmandu University. Prof. Dr. Pokharel has significantly contributed to standardizing tech education and cloud-computing infrastructure guidelines in Kathmandu and Nepal's sub-regions.",
    avatarUrl: "/images/speakers/manish-pokharel.jpg",
    tags: ["Academics", "Cloud Infrastructure", "E-Governance"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "kyle-gardner",
    name: "Mr. Kyle Gardner",
    title: "Government Affairs & Public Policy Lead",
    company: "Google (South Asia)",
    bio: "Coordinates strategic dialogues representing public sector initiatives, AI integration framework policy parameters, and tech adoption synergy inside Nepal and South Asian emerging digital economies.",
    avatarUrl: "/images/speakers/kyle-gardner.jpg",
    tags: ["Global Policies", "Big Tech", "AI Sovereignity"],
    isKeynote: true,
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "gagan-thapa",
    name: "Mr. Gagan Thapa",
    title: "Member of Parliament & General Secretary",
    company: "Nepali Congress",
    bio: "A highly progressive national leader advocating for 'faceless' digital governments, automated bureaucratic reform, and transparent public service delivery systems in Nepal.",
    avatarUrl: "/images/speakers/gagan-thapa.jpg",
    tags: ["Public Leadership", "Governance", "100-Days Agendas"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "ek-narayan",
    name: "Mr. Ek Narayan Aryal",
    title: "Former Chief Secretary",
    company: "Government of Nepal",
    bio: "Pioneered unified systemic integration in civil registers and smart public service channels. Argues that actual digital capability thrives on interoperable backend data exchanges.",
    avatarUrl: "/images/speakers/ek-narayan-aryal.jpg",
    tags: ["Public Service", "DPI", "System Integration"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "nishant-nair",
    name: "Mr. Nishant Nair",
    title: "Head of Street View Outsourced Operations",
    company: "Google Maps",
    bio: "Led the milestone national deployment of Google Street View services in Nepal, supporting modern digital tourism, navigation, and location-based economies.",
    avatarUrl: "/images/speakers/nishant-nair.jpg",
    tags: ["Geo-Tech", "Digital Maps", "Spatials"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  },
  {
    id: "nilesh-pradhan",
    name: "Mr. Nilesh Man Singh Pradhan",
    title: "CEO",
    company: "Nepal Clearing House Ltd. (NCHL)",
    bio: "Pioneered core retail transaction integration and digital payments architectures, pushing forward secure instant-payment gateways and international money linkages.",
    avatarUrl: "/images/speakers/nilesh-pradhan.jpg",
    tags: ["Fintech", "National Gateway", "Digital Economy"],
    linkedinUrl: "https://linkedin.com/",
    twitterUrl: "https://twitter.com/"
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "dnc-25",
    title: "Digital Nepal Conclave Report 2025",
    year: "2025",
    type: "Report",
    coverUrl: "/images/Publication/placeholder.jpg",
    description: "Comprehensive summary of the 2025 conclave containing policy directives on systems integration, summary of Google Street View launch, and digital health blueprints.",
    url: "https://www.ictfoundation.org.np/dnc-2025-report"
  },
  {
    id: "dnc-24",
    title: "Digital Nepal Conclave Report 2024",
    year: "2024",
    type: "Report",
    coverUrl: "/images/Publication/DNC-24-report.jpg",
    description: "Highlights from Prime Minister Dahal's inaugural program regarding the 'Decade of IT' and plans to generate over 1.5 million regional jobs.",
    url: "https://www.ictfoundation.org.np/dnc-2024-report"
  },
  {
    id: "dnc-23",
    title: "Digital Nepal Conclave Report 2023",
    year: "2023",
    type: "Report",
    coverUrl: "/images/Publication/DNC-23-report.jpg",
    description: "Strategic papers examining 'Digital Capability' (Sakshyam Nepal) as the ultimate prerequisite to sustainable digital economy growth.",
    url: "https://www.ictfoundation.org.np/dnc-2023-report"
  },
  {
    id: "dnc-22",
    title: "Digital Nepal Conclave Report 2022",
    year: "2022",
    type: "Report",
    coverUrl: "/images/Publication/DNC-22-report.jpg",
    description: "The foundational report cataloging 17 strategic working papers on expanding fiber backbones, regional server sites, and secure fintech APIs.",
    url: "https://www.ictfoundation.org.np/dnc-2022-report"
  },
  {
    id: "paridrishya-1",
    title: "Digital Paridrishya - Vol 1",
    year: "2024",
    type: "Booklet",
    coverUrl: "/images/Publication/Digital-Paridisya-1.jpg",
    description: "A comprehensive digital catalog tracking smart transformation achievements and provincial readiness scores across all 7 states of Nepal.",
    url: "https://www.ictfoundation.org.np/paridrishya-vol1"
  },
  {
    id: "paridrishya-2",
    title: "Digital Paridrishya - Vol 2",
    year: "2025",
    type: "Booklet",
    coverUrl: "/images/Publication/Digital-Paridisya-2.jpg",
    description: "The updated landscape document analyzing structural changes in remote sectors, cybersecurity measures, and local government digital services.",
    url: "https://www.ictfoundation.org.np/paridrishya-vol2"
  }
];

export const NEWS_ARTICLES = [
  "https://ictsamachar.com/news/digital-nepal-conclave-2025-concludes/",
  "https://www.nepalbahas.com/story/693941/2025/8/15/science-and-technology/the--digital-nepal-conqualive-2025--for-the/",
  "https://www.goodnepal.com/detail/92",
  "https://hamrakura.com/news-details/196303/2025-08-17",
  "https://ictsamachar.com/news/the-fourth-edition-of-digital-nepal-conclave-has-begun/",
  "https://english.pardafas.com/digital-nepal-conclave-2025-highlights-policy-reform-and-private-sector-engagement/",
  "https://ictsamachar.com/news/digital-transformation-should-be-in-the-interest-of-citizens-and-society-dr-shrestha/",
  "https://ictsamachar.com/news/digitalization-cannot-be-achieved-by-typing-on-a-computer-there-must-be-interoperability-between-systems/",
  "https://ictsamachar.com/news/google-launches-street-view-service-in-nepal/",
  "https://www.nepalpress.com/2025/08/15/628440/",
  "https://technologykhabar.com/2025/08/15/211684/",
  "https://www.capitalnepal.com/detail/65434",
  "https://ictsamachar.com/news/nepal-can-become-a-digital-work-center-prime-minister-oli/",
  // "https://www.onlinekhabar.com/2025/08/1743526/transformation-is-not-possible-without-digitalization-chief-secretary-aryal",
  "https://nepalpress.com/2025/08/15/628440/",
  "https://www.instagram.com/reel/DNXwPtIxKw_/",
  "https://www.techpana.com/2025/152488/pm-kp-sharma-oli-chatgpt-and-ai-usage-digital-nepal",
  // "https://www.nayapatrikadaily.com/news-details/175424/2025-08-15",
  // "https://www.onlinekhabar.com/2025/08/1742894/i-also-use-ai-chatgpt-will-tell-me-everything-kp-oli",
  "https://newsofnepal.com/2025/08/15/725445/",
  "https://businesspati.com/%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2-%E0%A4%A8%E0%A5%87%E0%A4%AA%E0%A4%BE%E0%A4%B2-%E0%A4%95%E0%A4%A8%E0%A5%8D%E0%A4%95%E0%A5%8D%E0%A4%B2%E0%A5%87%E0%A4%AD-%E0%A5%A8%E0%A5%A6/",
  // "https://clickmandu.com/2025/08/405396.html",
  // "https://ictside.com/2025/08/17/digital-nepal-conclave-2025-concludes-leaders-from-gagan-thapa-and-the-communications-and-finance-ministers-to-the-prime-minister-discuss-digital-transformation/",
];

