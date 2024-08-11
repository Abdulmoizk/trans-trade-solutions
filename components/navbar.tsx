"use client";
import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import { X as CloseIcon, AlignJustify as MenuIcon } from "lucide-react";
import { Logo } from "@/common/media/icons/trans-trade";
import MenuItems from "./MenuItems";
import ContactInfo from "./ContactInfo";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between p-4 bg-[#1850A0] text-white">
        <Logo className="size-16 ml-5" />
        <MenuItems />
        <ContactInfo />
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex md:hidden items-center justify-between p-4 bg-[#1850A0] text-white">
        <Logo className="size-24" />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="text-white">
              <MenuIcon size={24} />
            </button>
          </DialogTrigger>
          <DialogContent className="fixed inset-0 bg-gray-900 p-4 text-white">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setOpen(false)}
            >
              <CloseIcon size={24} />
            </button>
            <MenuItems />
            <ContactInfo />
          </DialogContent>
        </Dialog>
      </nav>
    </>
  );
};

export default Navbar;
