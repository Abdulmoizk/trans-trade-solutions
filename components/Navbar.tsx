"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X as CloseIcon, AlignJustify as MenuIcon } from "lucide-react";
import MenuItems from "./MenuItems";
import AnimatedDialog from "./ui/AnimatedDialog";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const navClasses = `fixed top-12 left-4 right-4 max-w-7xl mx-auto z-50 transition-all duration-300 ${scrolled ? "bg-white/98 backdrop-blur-xl shadow-2xl border border-gray-200" : "bg-white/95 backdrop-blur-md shadow-lg border border-gray-100"}`;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-8 bg-[#ED2228] z-[60] flex items-center overflow-hidden">
        <div className="animate-slide whitespace-nowrap text-white text-sm font-medium px-4">
          🚢 TransTrade Solutions – Your trusted partner in global logistics. | Call us: +92 329 2574256
        </div>
      </div>

      <nav className={`hidden sm:flex items-center justify-between px-6 md:px-8 lg:px-10 rounded-2xl ${navClasses}`}>
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Image
            src="/Logo.svg"
            alt="TransTradeSolutions"
            width={64}
            height={64}
            className="w-28 aspect-square object-cover h-auto"
            priority
          />
        </Link>
        <div className="flex items-center gap-6 lg:gap-8">
          <MenuItems />
          <Link 
            href="/contact" 
            className="px-6 py-2.5 bg-[#ED2228] text-white rounded-full hover:bg-[#c01f2e] transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>
      </nav>

      <nav className={`flex sm:hidden items-center justify-between px-4 py-3 rounded-xl ${navClasses}`}>
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Image
            src="/Logo.svg"
            alt="TransTradeSolutions"
            width={64}
            height={64}
            className="w-16 aspect-square object-cover h-auto"
            priority
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="px-4 py-2 bg-[#ED2228] text-white rounded-full hover:bg-[#c01f2e] transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105"
          >
            Get Quote
          </Link>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              aria-label="Open menu"
              aria-expanded={open ? "true" : "false"} 
              className="text-[#ED2228] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED2228] focus-visible:ring-offset-2 rounded-lg p-1"
            >
              <MenuIcon size={28} />
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay
                className="fixed inset-0 bg-black opacity-50"
                onClick={() => setOpen(false)}
              />
              <AnimatedDialog isOpen={open} onClose={() => setOpen(false)}>
                <div className="flex justify-between items-center mb-6">
                  <Link href="/">
                    <Image
                      src="/Logo.svg"
                      alt="TransTradeSolutions"
                      width={64}
                      height={64}
                      className="w-16 aspect-square object-cover  h-auto"
                      priority
                    />
                  </Link>
                  <Dialog.Close
                    className="text-[#ED2228] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED2228] focus-visible:ring-offset-2 rounded-lg p-1"
                    aria-label="Close menu"
                  >
                    <CloseIcon size={28} />
                  </Dialog.Close>
                </div>

                <div className="flex flex-col space-y-10 items-center justify-center mt-10 text-lg">
                  <MenuItems onClick={() => setOpen(false)} />
                </div>
              </AnimatedDialog>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
