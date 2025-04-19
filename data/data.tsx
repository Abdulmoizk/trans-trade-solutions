import { Globe, Cpu, Leaf, Shield, Headset } from 'lucide-react';
const shippingServicesData = [
  {
    id: 1,
    title: "International Freight Forwarding",
    img: "/frieght.jpg",
    date: "Available Worldwide",
    shortDescription: "Comprehensive air and sea freight services, tailored to your import/export needs.",
    icon: "Ship",
    content: [
      "We provide comprehensive air and sea freight services for both import and export operations, including inland transportation options.",
      "Our scheduled LCL (Less-than-Container Load) consolidation services ensure cost-effective shipment solutions.",
      "We offer Ex-Work and door-to-door delivery options tailored to your needs, along with seamless DDU/DDP shipment handling."
    ],
  },
  {
    id: 2,
    title: "Customs Clearance",
    img: "/customsClearance.jpg",
    date: "Available Worldwide",
    shortDescription: "Streamlined customs clearance services to simplify the import/export process.",
    icon: "Shield",
    content: [
      "Our full customs clearance services streamline the import/export process, including complex entry preparation and timely document handling.",
      "We provide time-definite delivery options with fixed cost estimates to ensure transparency and efficiency.",
    ],
  },
  {
    id: 3,
    title: "Inland Transportation",
    img: "/inlandTransportation.jpg",
    date: "Available Worldwide",
    shortDescription: "Efficient cross-stuffing and transportation services for cargo within local markets.",
    icon: "Truck",
    content: [
      "We manage cross stuffing of goods efficiently, with access to warehousing and segregation facilities as required.",
      "Our team arranges professional labor and provides forklifts based on the nature and volume of your cargo."
    ],
  },
  {
    id: 4,
    title: "International Transit Trade",
    img: "/transitTrade.jpg",
    date: "Available Worldwide",
    shortDescription: "Cross-border cargo distribution with route surveys and feasibility studies.",
    icon: "Globe",
    content: [
      "We handle cargo distribution across borders with thorough route surveys and feasibility studies.",
      "Our team supervises cargo throughout loading, unloading, and transit — including OOG projects and heavy load handling."
    ],
  },
  {
    id: 5,
    title: "Indenting / Sourcing",
    img: "/indenting.jpg",
    date: "Available Worldwide",
    shortDescription: "Product sourcing from manufacturers with competitive pricing and quality control.",
    icon: "Search",
    content: [
      "We assist in sourcing products directly from manufacturers, ensuring competitive pricing and quality control.",
      "Our experts handle negotiations, provide quotation management, and prepare documentation for smooth clearance at destinations."
    ],
  },
  {
    id: 6,
    title: "Project Cargo Management",
    img: "/projectCargo.jpg",
    date: "Available Worldwide",
    shortDescription: "Specialized handling of heavy machinery and Out of Gauge (OOG) cargo.",
    icon: "Layers",
    content: [
      "We specialize in handling OOG (Out of Gauge) and heavy machinery cargo using flat rack equipment and other advanced solutions.",
      "Our logistics experts coordinate cross stuffing of CBUs and partner with experienced handlers to ensure safety and compliance."
    ],
  },
];


const specialFeaturesData = [
  {
    id: 1,
    title: "Global Coverage",
    img: <Globe size={56} strokeWidth={0.5} className="text-[#1850A0] sm:size-[56px] md:size-[64px] lg:size-[80px]" />,
    desc: "Our shipping network spans across all major trade routes, ensuring that your cargo reaches its destination, no matter where in the world."
  },
  {
    id: 2,
    title: "Advanced Technology",
    img: <Cpu size={56} strokeWidth={0.5} className="text-[#1850A0] sm:size-[56px] md:size-[64px] lg:size-[80px]" />,
    desc: "We leverage cutting-edge tracking systems and AI-driven logistics to provide real-time updates and optimized shipping routes for faster, more efficient delivery."
  },
  {
    id: 3,
    title: "Eco-Friendly Solutions",
    img: <Leaf size={56} strokeWidth={0.5} className="text-[#1850A0] sm:size-[56px] md:size-[64px] lg:size-[80px]" />,
    desc: "Committed to sustainability, we offer eco-friendly shipping options with reduced carbon emissions, helping businesses meet their environmental goals."
  },
  {
    id: 4,
    title: "Safety and Security",
    img: <Shield size={56} strokeWidth={0.5} className="text-[#1850A0] sm:size-[56px] md:size-[64px] lg:size-[80px]" />,
    desc: "With industry-leading safety protocols, our shipping services ensure that your cargo is handled with the utmost care, minimizing risks during transit."
  },
  {
    id: 5,
    title: "24/7 Customer Support",
    img: <Headset size={56} strokeWidth={0.5} className="text-[#1850A0] sm:size-[56px] md:size-[64px] lg:size-[80px]" />,
    desc: "Our dedicated support team is available around the clock to address any concerns, provide updates, and offer solutions for all your shipping needs."
  }
];
export {
  shippingServicesData,
  specialFeaturesData
}