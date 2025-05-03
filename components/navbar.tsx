"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X as CloseIcon, AlignJustify as MenuIcon } from "lucide-react";
import { Logo } from "@/common/media/icons/trans-trade";
import MenuItems from "./MenuItems";
import AnimatedDialog from "./ui/animatedDialog";

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
      <nav className="hidden sm:flex items-center justify-between px-8 py-4 bg-[#1850A0] text-white shadow-md">
        <Logo className="w-16 h-auto" />
        <MenuItems />
      </nav>

      <nav className="flex sm:hidden items-center justify-between px-4 py-3 bg-[#1850A0] text-white shadow-md">
        <Logo className="w-16 h-auto" />
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger
            aria-label="Open menu"
            className="text-white focus:outline-none"
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
                <Logo className="w-16 h-auto" />
                <Dialog.Close
                  className="text-white focus:outline-none"
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
