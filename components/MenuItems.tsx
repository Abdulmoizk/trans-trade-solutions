import React from 'react';

const MenuItems = () => {
  return (
    <div className="flex space-x-4">
      <a href="/" className="hover:text-gray-400">Home</a>
      <a href="/about" className="hover:text-gray-400">About</a>
      <a href="/services" className="hover:text-gray-400">Services</a>
      <a href="/portfolio" className="hover:text-gray-400">Portfolio</a>
      <a href="/blog" className="hover:text-gray-400">Blog</a>
    </div>
  );
};

export default MenuItems;
