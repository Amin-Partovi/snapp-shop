"use client";

import { useCartInfo } from "@/hooks";
import { messages } from "@/messages/messages";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../../elements";
import { useState } from "react";
import ShoppingCartList from "./ShoppingCartList";

const ShoppingCart = () => {
  const { cartCount } = useCartInfo();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  return (
    <div className="flex items-center">
      <Button
        iconLeft={<ShoppingCartIcon width={20} height={20} />}
        size="lg"
        onClick={handleOpen}
      >
        {messages.cart}
      </Button>

      <div className="w-6 h-6 rounded-full flex justify-center items-center bg-gray-200 overflow-hidden shadow-xl translate-x-2 -translate-y-2 font-bold">
        {cartCount}
      </div>

      <ShoppingCartList isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default ShoppingCart;
