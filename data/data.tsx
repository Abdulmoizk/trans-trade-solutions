import { Globe, Cpu, Leaf, Shield, Headset } from 'lucide-react';

const shippingServicesData = [
  {
    id: 1,
    title: "International Freight Forwarding",
    img: "https://www.example.com/container-ship.jpg", // Replace with an actual image URL
    date: "Available Worldwide",
    content: `<ul>
  <li>Air Freight Services (Import/Export)</li>
  <li>Sea Freight Services (Import/Export) Road/Inland Transportation</li>
  <li>Scheduled LCL Consolidation (Import/Export)</li>
  <li>Ex-Work &amp; Door Deliveries</li>
  <li>DDU/DDP Shipments Services</li>
</ul>`
  },
  {
    id: 2,
    title: "Customs Clearance",
    img: "https://www.example.com/bulk-cargo-ship.jpg", // Replace with an actual image URL
    date: "Available Worldwide",
    content: `
    <ul>
    <li>ull Custom Clearance</li>
  <li>Complex Entry preparation</li>
  <li>Time-definite delivery</li>
  <li>Fixed Cost</li>
  <li>Preparation of Documents</li>
</ul>
    `
  },
  {
    id: 3,
    title: "Inland Transportation",
    img: "https://www.example.com/ro-ro-ship.jpg", // Replace with an actual image URL
    date: "Available Worldwide",
    content: `<ul>
  <li>Cross Stuffing of Goods in an efficient manner</li>
  <li>Warehousing / Godown for Segregation if required</li>
  <li>Arrangement of Professional Labor</li>
  <li>Provision of Fork Lifters as per the nature of the goods</li>
</ul>`
  },
  {
    id: 4,
    title: "International Transit Trade",
    img: "https://www.example.com/refrigerated-ship.jpg", // Replace with an actual image URL
    date: "Available Worldwide",
    content: `<ul>
  <li>Distribution to all destinations within the country and across the border</li>
  <li>Route Survey &amp; Feasibility studies</li>
  <li>Cargo Supervision during loading and un-loading, as well as in transit.</li>
  <li>OOG Projects and Heavy loads.</li>
</ul>`
  },
  {
    id: 5,
    title: "Indenting / Sourcing",
    img: "https://www.example.com/breakbulk-ship.jpg", // Replace with an actual image URL
    date: "Available Worldwide",
    content: `<ul>
  <li>Arrangement of the Quotation from Direct Manufacturers</li>
  <li>Assistance in Product Sourcing at competitive Price</li>
  <li>Effective negotiation for the desired contact terms</li>
  <li>Documentation for Smooth clearance at destinations</li>
</ul>`
  },
  {
    id: 6,
    title: "Project Cargo Management",
    img: "https://www.example.com/breakbulk-ship.jpg", // Replace with an actual image URL
    date: "Available Worldwide",
    content: `<ul>
  <li>Efficient handling of the Plants carried through Flat Rack Equipments</li>
  <li>OOG and Heavy Cargo Handling</li>
  <li>Associated with Professional Individuals handling Heavy Machinery</li>
  <li>Cross Stuffing of CBUs</li>
</ul>
`
  },
  {
    id: 3,
    title: "Afghan & CIS Transit Trade", 
    img: "https://www.example.com/ro-ro-ship.jpg", // Replace with an actual image URL
    date: "Available Worldwide",
    content: `<ul>
  <li>Distribution to all destinations within the country and across the border</li>
  <li>Route Survey &amp; Feasibility studies</li>
  <li>Cargo Supervision during loading and un-loading, as well as in transit.</li>
  <li>OOG Projects and Heavy loads.</li>
</ul>`
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