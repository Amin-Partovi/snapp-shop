"use client";

import { useCartInfo } from "@/hooks";
import { messages } from "@/messages/messages";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../elements";

const ShoppingCart = () => {
  const { cartCount } = useCartInfo();

  return (
    <div className="flex items-center">
      <Button iconLeft={<ShoppingCartIcon width={20} height={20} />} size="lg">
        {messages.cart}
      </Button>

      <div className="w-6 h-6 rounded-full flex justify-center items-center bg-gray-200 overflow-hidden shadow-xl translate-x-2 -translate-y-2 font-bold">
        {cartCount}
      </div>
    </div>
  );
};

export default ShoppingCart;
