"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X as CloseIcon, AlignJustify as MenuIcon } from "lucide-react";
import { Logo } from "@/common/media/icons/trans-trade";
import MenuItems from "./MenuItems";
import ContactInfo from "./ContactInfo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <>
      <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-[#1850A0] text-white shadow-md">
        <Logo className="w-16 h-auto" />
        <MenuItems />
        <ContactInfo />
      </nav>

      <nav className="flex md:hidden items-center justify-between px-4 py-3 bg-[#1850A0] text-white shadow-md">
        <Logo className="w-16 h-auto" />
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button aria-label="Open menu" className="text-white focus:outline-none">
              <MenuIcon size={28} />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm transition-opacity duration-300" />
            <Dialog.Content
              className="fixed inset-0 z-50 bg-[#0f172a] text-white px-6 py-8 overflow-y-auto transition-transform duration-300 transform animate-slide-in-right"
              onPointerDownOutside={() => setOpen(false)}
              onEscapeKeyDown={() => setOpen(false)}
            >
              <div className="flex justify-between items-center mb-6">
                <Logo className="w-16 h-auto" />
                <button
                  className="text-white focus:outline-none"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <CloseIcon size={28} />
                </button>
              </div>

              <div className="flex flex-col space-y-10 items-center justify-center mt-10 text-lg">
                <MenuItems />
                <ContactInfo />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </>
  );
};

export default Navbar;
