import React from "react";
import Link from "next/link";

interface MenuItemsProps {
  onClick?: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ onClick }) => {
  const linkClass = " transition duration-200 text-[#000] hover:text-[#ED2228] transition-all duration-300";

  return (
    <nav className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 text-base sm:text-lg font-medium tracking-wide  flex-wrap justify-center gap-y-4">
      <Link href="/" className={linkClass} onClick={onClick}>
        Home
      </Link>
      <Link href="/our-mission" className={linkClass} onClick={onClick}>
        About Us
      </Link>
      <Link href="/our-services" className={linkClass} onClick={onClick}>
        Services
      </Link>
      <Link href="/careers" className={linkClass} onClick={onClick}>
        Careers
      </Link>
      <Link href="/contact" className={linkClass} onClick={onClick}>
        Contact
      </Link>
    </nav>
  );
};

export default MenuItems;
