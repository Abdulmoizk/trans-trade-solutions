import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/common/media/icons/trans-trade";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1850A0] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo */}
          <div>
            <div className="flex justify-center md:justify-start">
              <Logo className="size-28 text-white" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              {[
                { href: "/", label: "Home" },
                { href: "/our-mission", label: "About Us" },
                { href: "/our-services", label: "Services" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href} className="text-sm mb-2 hover:underline">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm mb-2">
              Suite No. L-311, 4th Floor, Marine Centre, Block 2, Clifton, Karachi, Pakistan
            </p>
            <Link
              href="mailto:info@transtrade.pk"
              className="text-sm mb-2 block hover:underline"
            >
              Email: info@transtrade.pk
            </Link>
            <Link
              href="tel:+922132313030"
              className="text-sm block hover:underline"
            >
              Phone: (021) 32313030
            </Link>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61559347383483"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="hover:text-gray-300 transition" size={24} />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <Twitter className="hover:text-gray-300 transition" size={24} />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="hover:text-gray-300 transition" size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="hover:text-gray-300 transition" size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm">
          &copy; 2024 Trans Trade Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
