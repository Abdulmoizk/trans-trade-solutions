import React from "react";
import Link from "next/link";

interface MenuItemsProps {
  onClick?: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ onClick }) => {
  const linkClass = "relative transition-all duration-300 text-[#000] hover:text-[#ED2228] font-medium group";

  return (
    <nav className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 text-base sm:text-lg tracking-wide flex-wrap justify-center gap-y-4">
      <Link href="/" className={linkClass} onClick={onClick}>
        <span className="relative">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ED2228] transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
      <Link href="/our-mission" className={linkClass} onClick={onClick}>
        <span className="relative">
          About Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ED2228] transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
      <Link href="/our-services" className={linkClass} onClick={onClick}>
        <span className="relative">
          Services
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ED2228] transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
      <Link href="/careers" className={linkClass} onClick={onClick}>
        <span className="relative">
          Careers
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ED2228] transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
      <Link href="/contact" className={linkClass} onClick={onClick}>
        <span className="relative">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ED2228] transition-all duration-300 group-hover:w-full"></span>
        </span>
      </Link>
    </nav>
  );
};

export default MenuItems;
