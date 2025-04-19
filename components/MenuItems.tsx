import React from 'react';
import Link from 'next/link';

const MenuItems = () => {
  return (
    <nav className="flex space-x-6 text-base sm:text-lg font-medium tracking-wide text-white">
      <Link href="/" className="hover:text-gray-200 transition">Home</Link>
      <Link href="/our-mission" className="hover:text-gray-200 transition">About Us</Link>
      <Link href="/our-services" className="hover:text-gray-200 transition">Services</Link>
      <Link href="/careers" className="hover:text-gray-200 transition">Careers</Link>
      <Link href="/contact" className="hover:text-gray-200 transition">Contact</Link>

    </nav>
  );
};

export default MenuItems;
