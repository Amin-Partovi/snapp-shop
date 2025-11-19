"use client";

import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  selector?: string;
}

const Portal = ({ children, selector = "#modal-portal" }: PortalProps) => {
  const portalRoot =
    typeof document !== "undefined" ? document.querySelector(selector) : null;

  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
};

export default Portal;
