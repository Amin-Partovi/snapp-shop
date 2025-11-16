import React from "react";
import { Button } from "../elements";
import { messages } from "@/messages/messages";

const productsInCart = 2;

const ShoppingCart = () => {
  return (
    <div className="flex items-center gap-2">
      <Button iconLeft={<ShoppingCart />}>{messages.cart}</Button>
      <div className="w-6 h-6 rounded-full flex justify-center items-center shadow-lg border border-gray-400">
        {productsInCart}
      </div>
    </div>
  );
};

export default ShoppingCart;
