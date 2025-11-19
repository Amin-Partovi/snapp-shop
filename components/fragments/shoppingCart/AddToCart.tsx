"use client";

import { Button } from "@/components/elements";
import { useShoppingCartStore } from "@/store";
import { ProductT } from "@/lib/products/types";
import { messages } from "@/messages/messages";
import { ShoppingCartIcon } from "lucide-react";

interface AddToCartProps {
  product: ProductT;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const addToCart = useShoppingCartStore((state) => state.addToCart);

  return (
    <Button
      size="lg"
      iconLeft={<ShoppingCartIcon size={20} />}
      fluid
      onClick={() => addToCart(product)}
      className="whitespace-nowrap"
    >
      {messages.add_to_cart}
    </Button>
  );
};

export default AddToCart;
