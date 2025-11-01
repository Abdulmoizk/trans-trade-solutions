import { Globe, Cpu, Leaf, Shield, Headset } from 'lucide-react';

const shippingServicesData = [
  {
    id: 1,
    title: "International Freight Forwarding",
    img: "/freight.jpg",
    date: "Available Worldwide",
    shortDescription: "Comprehensive air and sea freight services, tailored to your import/export needs.",
    icon: "Ship",
    content: [
      "We offer comprehensive air and sea freight services for both import and export operations.",
      "Our scheduled LCL (Less-than-Container Load) consolidation services provide cost-effective and reliable shipping solutions.",
      "We also specialize in Ex-Works and door-to-door deliveries, tailored to meet your specific requirements, with smooth handling of DDU (Delivered Duty Unpaid) and DDP (Delivered Duty Paid) shipments."
    ],
  },
  {
    id: 2,
    title: "Customs Clearance Services",
    img: "/customsClearance.jpg",
    date: "Available Worldwide",
    shortDescription: "Streamlined customs clearance services to simplify the import/export process.",
    icon: "Shield",
    content: [
      "Our end-to-end customs clearance solutions simplify the import and export process by expertly managing complex declarations and ensuring timely handling of all required documentation.",
      "We offer time-definite delivery options to support efficient logistics planning and reliable cargo movement."
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
      "We provide efficient inland transportation solutions, including cross-stuffing operations and access to warehousing and cargo segregation facilities when needed.",
      "Our team ensures the provision of appropriate handling resources, including professional labor and forklifts, based on the specific cargo requirements. We also specialize in the transport of heavy cargo and industrial machinery, utilizing specialized vehicles and equipment for safe and reliable delivery."
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
      "We specialize in managing cross-border cargo movements, including down transit, with a strong focus on Afghanistan, Uzbekistan, and all CIS and landlocked countries.",
      "Our services include detailed route surveys and feasibility studies to ensure safe, compliant, and efficient transit operations."
    ],
  },
  {
    id: 5,
    title: "Indenting & Sourcing",
    img: "/indenting.jpg",
    date: "Available Worldwide",
    shortDescription: "Product sourcing from manufacturers with competitive pricing and quality control.",
    icon: "Search",
    content: [
      "We facilitate direct sourcing from trusted manufacturers, ensuring competitive pricing, product reliability, and strict quality control.",
      "Our team manages the entire procurement process, including supplier negotiations, quotation handling, and preparation of complete documentation to ensure smooth and timely clearance at destination ports."
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
      "We specialize in the handling of Out-of-Gauge (OOG) and heavy machinery cargo, utilizing flat racks and other specialized equipment to ensure secure and efficient transport.",
      "Our logistics team expertly coordinates cross-stuffing of Complete Built Units (CBUs) and collaborates with experienced partners to maintain the highest standards of safety, precision, and regulatory compliance."
    ],
  },
];


const specialFeaturesData = [
  {
    id: 1,
    title: "Global Coverage",
    img: <Globe size={32} strokeWidth={2} className="text-white" />,
    desc: "Our shipping network spans across all major trade routes, ensuring that your cargo reaches its destination, no matter where in the world."
  },
  {
    id: 2,
    title: "Advanced Technology",
    img: <Cpu size={32} strokeWidth={2} className="text-white" />,
    desc: "We leverage cutting-edge tracking systems and AI-driven logistics to provide real-time updates and optimized shipping routes for faster, more efficient delivery."
  },
  {
    id: 3,
    title: "Eco-Friendly Solutions",
    img: <Leaf size={32} strokeWidth={2} className="text-white" />,
    desc: "Committed to sustainability, we offer eco-friendly shipping options with reduced carbon emissions, helping businesses meet their environmental goals."
  },
  {
    id: 4,
    title: "Safety and Security",
    img: <Shield size={32} strokeWidth={2} className="text-white" />,
    desc: "With industry-leading safety protocols, our shipping services ensure that your cargo is handled with the utmost care, minimizing risks during transit."
  },
  {
    id: 5,
    title: "24/7 Customer Support",
    img: <Headset size={32} strokeWidth={2} className="text-white" />,
    desc: "Our dedicated support team is available around the clock to address any concerns, provide updates, and offer solutions for all your shipping needs."
  }
];
export {
  shippingServicesData,
  specialFeaturesData
}