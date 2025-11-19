"use client";

import { useEffect } from "react";
import { Portal } from "../elements";
import {
  CircleXIcon,
  ClosedCaptionIcon,
  CrossIcon,
  FolderClosedIcon,
} from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center animate-fadeIn backdrop-blur-xs"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl animate-scaleIn flex flex-col gap-4 mx-2 md:mx-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between">
            <span className="text-lg font-semibold">{title}</span>

            <CircleXIcon
              onClick={onClose}
              role="button"
              aria-label="close modal"
              className="cursor-pointer"
            />
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
