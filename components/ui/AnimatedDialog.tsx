"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface AnimatedDialogProps extends React.ComponentProps<typeof Dialog.Content> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const AnimatedDialog: React.FC<AnimatedDialogProps> = ({
  isOpen,
  onClose,
  children,
  ...props
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animationClass, setAnimationClass] = useState("animate-slide-in-right");

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimationClass("animate-slide-in-right");
    } else {
      setAnimationClass("animate-slide-out-right");
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, 300); 
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <Dialog.Content
      {...props}
      className={`fixed inset-0 z-50 bg-[#fff] text-white px-6 py-8 overflow-y-auto transition-transform transform ${animationClass}`}
      onPointerDownOutside={onClose}
      onEscapeKeyDown={onClose}
    >
      {children}
    </Dialog.Content>
  );
};

export default AnimatedDialog;
