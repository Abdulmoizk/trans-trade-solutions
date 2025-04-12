import { Globe, Cpu, Leaf, Shield, Headset } from 'lucide-react';

const shippingServicesData = [
    {
      id: 1,
      title: "Container Shipping",
      img: "https://www.example.com/container-ship.jpg", // Replace with an actual image URL
      company: "Global Ocean Lines",
      date: "Available Worldwide",
      desc: "Reliable and efficient container shipping services across major trade routes, ensuring timely delivery of goods in secured containers.",
    },
    {
      id: 2,
      title: "Bulk Cargo Shipping",
      img: "https://www.example.com/bulk-cargo-ship.jpg", // Replace with an actual image URL
      company: "Maritime Cargo Ltd.",
      date: "Available Worldwide",
      desc: "Specialized bulk cargo shipping solutions, ideal for transporting large quantities of raw materials such as coal, grain, and ores.",
    },
    {
      id: 3,
      title: "Ro-Ro Shipping",
      img: "https://www.example.com/ro-ro-ship.jpg", // Replace with an actual image URL
      company: "Atlantic Carriers",
      date: "Available Worldwide",
      desc: "Roll-on/roll-off (Ro-Ro) shipping services for transporting vehicles, heavy equipment, and machinery across international borders.",
    },
    {
      id: 4,
      title: "Refrigerated Shipping",
      img: "https://www.example.com/refrigerated-ship.jpg", // Replace with an actual image URL
      company: "CoolShip Logistics",
      date: "Available Worldwide",
      desc: "Temperature-controlled shipping solutions for perishable goods like food, pharmaceuticals, and other temperature-sensitive cargo.",
    },
    {
      id: 5,
      title: "Breakbulk Shipping",
      img: "https://www.example.com/breakbulk-ship.jpg", // Replace with an actual image URL
      company: "BlueSea Shipping",
      date: "Available Worldwide",
      desc: "Tailored solutions for transporting oversized or non-containerized cargo that cannot fit into standard containers, including heavy equipment and machinery.",
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