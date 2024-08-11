import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/common/media/icons/trans-trade";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-evenly ">
          {/* Logo and Description */}
          <div className=" mb-6 md:mb-0">
            <Logo className="size-32 text-white" />
          </div>

          {/* Quick Links */}
          <div className=" mb-6 md:mb-0">
            <h3 className="text-md font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="text-sm mb-1">
                <Link href="/">Home</Link>
              </li>
              <li className="text-sm mb-1">
                <Link href="/about">About Us</Link>
              </li>
              <li className="text-sm mb-1">
                <Link href="/services">Services</Link>
              </li>
              <li className="text-sm mb-1">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col w-1/4 mb-6 md:mb-0">
            <h3 className="text-md font-semibold mb-2">Contact Us</h3>
            <p className="text-sm mb-1">
              Office No. 502, Rock Trade Centre, Near Jilani Centre, Main Tower
            </p>
            <Link href="mailto:info@transtrade.pk" className="text-sm mb-1">
              Email: info@transtrade.pk
            </Link>
            <Link href="tel:+922132313030" className="text-sm mb-1">
              Phone: (021) 32313030
            </Link>
          </div>

          {/* Social Media */}
          <div className=" mb-6 md:mb-0">
            <h3 className="text-md font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61559347383483"
                target="_blank"
                aria-label="Facebook"
              >
                <span className="text-gray-400 hover:text-white cursor-pointer">
                  <Facebook size={24} />
                </span>
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <span className="text-gray-400 hover:text-white cursor-pointer">
                  <Twitter size={24} />
                </span>
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <span className="text-gray-400 hover:text-white cursor-pointer">
                  <Instagram size={24} />
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <span className="text-gray-400 hover:text-white cursor-pointer">
                  <Linkedin size={24} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; 2024 Trans Trade Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
