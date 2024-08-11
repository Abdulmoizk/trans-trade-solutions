import React, { useState } from 'react';
import { Dialog } from '@radix-ui/react-dialog';
import { X as CloseIcon, List as MenuIcon } from 'phosphor-react';
import MenuItems from './MenuItems';
import ContactInfo from './ContactInfo';
import { Logo } from '@/common/media/icons/trans-trade';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex items-center justify-between p-4 bg-gray-800 text-white">
        <Logo />
        <MenuItems />
        <ContactInfo />
      </nav>
      <nav className="flex md:hidden items-center justify-between p-4 bg-gray-800 text-white">
        <Logo />
        <Dialog open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="text-white">
              <MenuIcon size={24} />
            </button>
          </Dialog.Trigger>
          <Dialog.Content className="fixed top-0 right-0 w-full h-full bg-gray-900 p-4 text-white transition-transform transform ease-in-out duration-300" style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}>
            <button className="absolute top-4 right-4 text-white" onClick={() => setOpen(false)}>
              <CloseIcon size={24} />
            </button>
            <MenuItems />
            <ContactInfo />
          </Dialog.Content>
        </Dialog>
      </nav>
    </>
  );
};

export default Navbar;
