import { messages } from "@/messages/messages";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../elements";

const productsInCart = 2;

const ShoppingCart = () => {
  return (
    <div className="flex items-center">
      <Button iconLeft={<ShoppingCartIcon width={20} height={20} />} size="lg">
        {messages.cart}
      </Button>
      <div className="w-6 h-6 rounded-full flex justify-center items-center bg-gray-200 overflow-hidden shadow-xl translate-x-2 -translate-y-2 font-bold">
        {productsInCart}
      </div>
    </div>
  );
};

export default ShoppingCart;
