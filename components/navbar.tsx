"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X as CloseIcon, AlignJustify as MenuIcon } from "lucide-react";
import { Logo } from "@/common/media/icons/trans-trade";
import MenuItems from "./MenuItems";
import AnimatedDialog from "./ui/animatedDialog";
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

  const navClasses = `fixed top-8 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-[#fff] backdrop-blur-md shadow-md"}`;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-8 bg-[#ED2228] z-[60] flex items-center overflow-hidden">
        <div className="animate-slide whitespace-nowrap text-white text-sm font-medium px-4">
        🚚 TransTrade Solutions – Delivering trust, speed, and security in global logistics. Track your shipment with confidence!
        </div>
      </div>


      <nav className={`hidden sm:flex items-center justify-between px-8 ${navClasses}`}>

        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="TransTradeSolutions"
            width={64}
            height={64}
            className="w-28 aspect-square object-cover h-auto"
            priority
          />
        </Link>
        <MenuItems />
      </nav>

      <nav className={`flex sm:hidden items-center justify-between px-4 py-2 ${navClasses}`}>
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
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger
            aria-label="Open menu"
            aria-expanded={open ? "true" : "false"} 
            className="text-[#ED2228] transition-all duration-300 focus:outline-none"
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
                  className="text-[#ED2228] transition-all duration-300 focus:outline-none"
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
      </nav>
    </>
  );
};

export default Navbar;
