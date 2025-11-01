'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemsProps {
  onClick?: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ onClick }) => {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/our-mission", label: "About Us" },
    { href: "/our-services", label: "Services" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-1 text-sm sm:text-base tracking-wide flex-wrap justify-center gap-y-2" aria-label="Main navigation">
      {links.map((link) => {
        const isActive = pathname === link.href;
        const linkClass = `relative transition-all duration-300 font-bold group px-4 py-2 rounded-lg ${
          isActive 
            ? "text-[#ED2228] bg-[#ED2228]/10" 
            : "text-gray-700 hover:text-[#ED2228] hover:bg-[#ED2228]/10"
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED2228] focus-visible:ring-offset-2`;
        
        return (
          <Link 
            key={link.href}
            href={link.href} 
            className={linkClass}
            onClick={onClick}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default MenuItems;