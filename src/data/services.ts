// src/data/services.ts

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string; // SVG path data or emoji fallback
  tags: string[];
  heroImage: string; // placeholder color for inner page banner
  color: string;
  features: { title: string; desc: string }[];
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "it-security",
    title: "IT & Security Solutions",
    shortTitle: "IT & Security",
    tagline: "Fortify Your Digital Perimeter",
    description:
      "End-to-end IT infrastructure and cybersecurity solutions to safeguard and streamline your digital operations — from firewall administration to complete CCTV surveillance systems.",
    icon: "shield",
    tags: [
      "Firewall",
      "CCTV",
      "VPN",
      "Endpoint Security",
      "DNS Security",
      "Cloud Security",
    ],
    heroImage: "#0d3347",
    color: "#0d5578",
    features: [
      {
        title: "Cloud & Virtualisation Security",
        desc: "Protect your cloud workloads and virtual environments with advanced policy enforcement and real-time monitoring.",
      },
      {
        title: "Security Monitoring & Management",
        desc: "24/7 security operations with threat detection, incident response, and comprehensive audit trails.",
      },
      {
        title: "Host & Endpoint Security",
        desc: "Protect every device on your network — laptops, servers, and mobile endpoints — with enterprise-grade protection.",
      },
      {
        title: "Firewall Administration",
        desc: "Expert configuration, monitoring, and management of next-generation firewalls to keep threats at bay.",
      },
      {
        title: "Advanced Malware Protection",
        desc: "Multi-layered defense including sandboxing, behavioural analysis, and real-time threat intelligence.",
      },
      {
        title: "Complete CCTV Systems",
        desc: "End-to-end surveillance design, high-tech camera installation, and wireless repeater systems for physical security.",
      },
      {
        title: "Wi-Fi Network Planning",
        desc: "Site surveys, indoor/outdoor design, and implementation of secure enterprise Wi-Fi networks.",
      },
      {
        title: "Security Services Suite",
        desc: "Comprehensive Firewall, VPN, Anti-Virus, and RSA authentication services under one roof.",
      },
      {
        title: "Endpoint Security Services",
        desc: "Protect your business endpoints with advanced, next-generation security solutions designed to detect, prevent, and respond to evolving cyber threats. We provide end-to-end Endpoint Security services, from solution assessment and Proof of Concept (POC) to deployment, configuration, and ongoing support. We partner with leading global security technology providers, including CrowdStrike, Seqrite, and other top-tier cybersecurity platforms, to deliver solutions aligned with your business requirements. Our experts help organizations strengthen endpoint protection, improve threat visibility, and enhance their overall security posture.",
      },
    ],
    benefits: [
      "Reduce breach risk by up to 90% with layered security",
      "Stay compliant with IT regulatory frameworks",
      "24/7 threat monitoring and rapid incident response",
      "Unified security management across all your endpoints",
      "Protect business reputation and customer trust",
      "Scalable security that grows with your business",
    ],
  },
  {
    slug: "managed-services",
    title: "IT Managed Services",
    shortTitle: "Managed Services",
    tagline: "Your IT. Fully Managed. Always On.",
    description:
      "We deliver end-to-end infrastructure management — from network design and server migrations to unified communications and disaster recovery — ensuring your IT environment is secure, scalable, and always optimized.",
    icon: "settings",
    tags: [
      "LAN/WAN",
      "VoIP",
      "Wi-Fi Mesh",
      "Disaster Recovery",
      "Server Migration",
      "Network Design",
    ],
    heroImage: "#061a2e",
    color: "#093d57",
    features: [
      {
        title: "Network Design & Architecture",
        desc: "Expert planning and implementation of LAN, WAN, and backbone networks tailored to your operational needs.",
      },
      {
        title: "Router & Firewall Administration",
        desc: "Professional setup, configuration, and ongoing management of your core network devices.",
      },
      {
        title: "Network Discovery & Assessment",
        desc: "Comprehensive documentation, threat assessment, and vulnerability scanning of your existing infrastructure.",
      },
      {
        title: "Server Room & Cabling Setup",
        desc: "Structured cabling, rack installation, and server room buildout to industry best practices.",
      },
      {
        title: "Network & Server Migration",
        desc: "Seamless, zero-downtime migrations with full data integrity verification and rollback planning.",
      },
      {
        title: "Unified Communications",
        desc: "VoIP systems and IP video conferencing that connect your teams wherever they work.",
      },
      {
        title: "Metro Wireless Solutions",
        desc: "Wi-Fi, Mesh, and Hybrid wireless deployments for offices, campuses, and multi-site operations.",
      },
      {
        title: "Disaster Recovery & Business Continuity",
        desc: "Comprehensive DR planning, implementation, and regular testing to ensure you're always ready.",
      },
    ],
    benefits: [
      "Free your team to focus on core business activities",
      "Predictable monthly IT costs with no surprises",
      "Access to a full team of certified IT specialists",
      "Proactive monitoring prevents issues before they occur",
      "Rapid response SLAs to minimise downtime",
      "Strategic IT roadmap aligned to business goals",
    ],
  },
  {
    slug: "cloud",
    title: "Cloud Services & Data Centres",
    shortTitle: "Cloud & DC",
    tagline: "Scale Without Limits",
    description:
      "Scalable cloud hosting and secure data center services — from AWS and Azure migrations to private cloud, Kubernetes, and co-location — to power your business growth and resilience.",
    icon: "cloud",
    tags: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Tally Cloud",
      "Co-Location",
    ],
    heroImage: "#0a2540",
    color: "#1272a0",
    features: [
      {
        title: "Multi-Cloud Architecture",
        desc: "Expert design and implementation across AWS, Google Cloud Platform, Microsoft Azure, and hybrid environments.",
      },
      {
        title: "Cloud Migration Services",
        desc: "Seamless lift-and-shift or re-architected migrations with minimal disruption to your operations.",
      },
      {
        title: "Private Cloud & Encrypted Storage",
        desc: "Dedicated private cloud environments with enterprise encryption for sensitive business data.",
      },
      {
        title: "Kubernetes & Container Cloud",
        desc: "Modern containerised workloads managed at scale — from deployment pipelines to auto-scaling clusters.",
      },
      {
        title: "HA Cluster & Tally Cloud",
        desc: "High-availability cluster setups and purpose-built Tally Cloud hosting for uninterrupted ERP access.",
      },
      {
        title: "Co-Location Services",
        desc: "Secure rack and full-rack co-location in tier-3 data centres with 99.99% uptime guarantees.",
      },
      {
        title: "Hosting Services",
        desc: "Shared hosting, cloud hosting, VPS, and dedicated server options for every scale of business.",
      },
      {
        title: "Security & Edge Computing",
        desc: "Firewall, load balancers, SSL certificates, GPU servers, and edge computing for peak performance.",
      },
    ],
    benefits: [
      "Eliminate capital expenditure on hardware",
      "Scale resources up or down in minutes",
      "99.99% uptime SLA with redundant infrastructure",
      "Disaster recovery built into every cloud deployment",
      "Data sovereignty and compliance assurance",
      "Expert support from certified cloud architects",
    ],
  },
  {
    slug: "telecom",
    title: "Telecommunication Services",
    shortTitle: "Telecommunication",
    tagline: "Communication That Never Drops",
    description:
      "Robust voice and data services that keep your business communication crystal clear and always connected — from SIP trunks and PRI lines to hosted IVR and international bridging.",
    icon: "phone",
    tags: ["SIP Trunk", "PRI", "Centrex", "IVR", "Toll Free", "SmartOffice"],
    heroImage: "#0d2e45",
    color: "#0d5578",
    features: [
      {
        title: "SIP Trunk & PRI Lines",
        desc: "Enterprise-grade voice connectivity with crystal-clear call quality and carrier-level reliability.",
      },
      {
        title: "Centrex & SmartOffice®",
        desc: "Cloud-hosted PBX services that eliminate the need for on-premise telephony hardware entirely.",
      },
      {
        title: "Hosted IVR Solutions",
        desc: "Custom interactive voice response systems to route calls intelligently and improve customer experience.",
      },
      {
        title: "Toll-Free & Virtual Numbers",
        desc: "National toll-free numbers and virtual DID numbers to build a professional pan-India presence.",
      },
      {
        title: "International Bridging Services",
        desc: "Seamless international call connectivity for businesses with global operations or customers.",
      },
      {
        title: "Hosted OBD & SMS Solutions",
        desc: "Outbound dialler and bulk SMS campaigns for marketing, alerts, and customer engagement.",
      },
      {
        title: "Call Register Services",
        desc: "Detailed call analytics, logging, and reporting to optimise team performance and customer interactions.",
      },
      {
        title: "WhatsApp for Business Suite",
        desc: "Professional WhatsApp Business API integration for modern, messaging-first customer communication.",
      },
    ],
    benefits: [
      "Reduce telephony costs by up to 60% vs legacy PBX",
      "Unified communications across voice, video, and messaging",
      "Scale lines up or down instantly with no hardware changes",
      "Professional image with toll-free and virtual numbers",
      "Detailed analytics to improve team performance",
      "Disaster-proof communications with cloud redundancy",
    ],
  },
  {
    slug: "leased-lines",
    title: "Internet Leased Lines",
    shortTitle: "Internet Leased Lines",
    tagline: "Always-On. Symmetrical. Uncontended.",
    description:
      "High-speed, dedicated internet solutions designed for seamless, uninterrupted business connectivity — with symmetrical speeds, guaranteed uptime, and enterprise SLAs backed by TATA Tele Business Services.",
    icon: "network",
    tags: [
      "ILL",
      "SD-WAN",
      "MPLS",
      "P2P",
      "Burstable Bandwidth",
      "Business Broadband",
    ],
    heroImage: "#071e30",
    color: "#093d57",
    features: [
      {
        title: "Internet Leased Line (ILL)",
        desc: "Dedicated, uncontended bandwidth with symmetrical upload and download speeds and strict SLA guarantees.",
      },
      {
        title: "ILL Burstable Bandwidth",
        desc: "Commit to a base bandwidth and burst higher during peak demand — pay only for what you actually use.",
      },
      {
        title: "SD-WAN iFLX",
        desc: "Software-defined WAN that intelligently routes traffic for optimal performance across multiple links.",
      },
      {
        title: "Smart VPN-MPLS",
        desc: "Private, secure site-to-site connectivity across all your office locations with guaranteed QoS.",
      },
      {
        title: "Leased Line P2P",
        desc: "Point-to-point dedicated circuits connecting two locations with complete privacy and performance consistency.",
      },
      {
        title: "EZ Cloud Connect",
        desc: "Direct, private connectivity to cloud providers — bypassing the public internet for speed and security.",
      },
      {
        title: "Business & Retail Broadband",
        desc: "High-speed broadband solutions for smaller sites with business-grade support and priority service.",
      },
      {
        title: "Ultra-LOLA",
        desc: "Ultra-low latency links ideal for trading, broadcasting, real-time collaboration, and latency-sensitive applications.",
      },
    ],
    benefits: [
      "Guaranteed uptime of 99.5%+ with SLA-backed compensation",
      "Symmetrical speeds — upload equals download always",
      "Zero congestion — uncontended dedicated bandwidth",
      "Static IP addresses included as standard",
      "24/7 NOC monitoring with proactive fault resolution",
      "Scalable from 1 Mbps to 10 Gbps as your needs grow",
    ],
  },
  {
    slug: "hosting",
    title: "Hosting Services",
    shortTitle: "Hosting",
    tagline: "Your Digital Presence, Powered Up",
    description:
      "Flexible and reliable hosting from shared environments to dedicated GPU servers — with domain management, SSL certificates, and full backup solutions for every scale of business.",
    icon: "server",
    tags: [
      "Shared Hosting",
      "Cloud Hosting",
      "VPS",
      "Dedicated Server",
      "SSL",
      "Domain",
    ],
    heroImage: "#0a1e32",
    color: "#1272a0",
    features: [
      {
        title: "Shared Hosting",
        desc: "Cost-effective hosting for websites and small applications — perfect for startups and growing businesses.",
      },
      {
        title: "Cloud Hosting",
        desc: "Scalable cloud-based hosting with automatic resource scaling and high availability configurations.",
      },
      {
        title: "VPS Server",
        desc: "Virtual private servers with dedicated resources, root access, and complete control over your environment.",
      },
      {
        title: "Dedicated Server",
        desc: "Bare-metal dedicated servers for high-performance workloads that demand maximum power and isolation.",
      },
      {
        title: "GPU Server",
        desc: "High-performance GPU servers for AI/ML workloads, rendering, scientific computing, and data processing.",
      },
      {
        title: "Domain Services",
        desc: "Complete domain registration, transfer, and DNS management across all major TLDs including .in and .co.in.",
      },
      {
        title: "SSL Certificates",
        desc: "Domain, Organisation, and Extended Validation SSL certificates to secure your web presence and build trust.",
      },
      {
        title: "Backup Solutions",
        desc: "Automated daily, weekly, and monthly backups with rapid restore capabilities and offsite replication.",
      },
    ],
    benefits: [
      "99.9% uptime guarantee across all hosting tiers",
      "Free migration assistance from your current provider",
      "One-click installer for WordPress, Joomla, and more",
      "Automated daily backups with one-click restore",
      "cPanel / Plesk control panels for easy management",
      "Expert support available 24/7 via call, email, and chat",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.shortTitle,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/contact" },
];
