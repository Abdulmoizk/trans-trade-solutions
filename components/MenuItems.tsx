import React from 'react';
import Link from 'next/link';

const MenuItems = () => {
  return (
    <nav className="flex space-x-6 text-base sm:text-lg font-medium tracking-wide text-white">
      <Link href="/" className="hover:text-gray-200 transition">Home</Link>
      <Link href="/our-mission" className="hover:text-gray-200 transition">About</Link>
      <Link href="/our-services" className="hover:text-gray-200 transition">Services</Link>
    </nav>
  );
};

export default MenuItems;
