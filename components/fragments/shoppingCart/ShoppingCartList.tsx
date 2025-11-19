import { messages } from "@/messages/messages";
import { useShoppingCartStore } from "@/store";
import { Trash2Icon } from "lucide-react";
import { Button } from "../../elements";
import Modal from "../Modal";
import ShoppingCartItem from "./ShoppingCartItem";
import { formatWithCommas } from "@/utils";
import { useCartInfo } from "@/hooks";
import { useCallback, useMemo } from "react";

interface ShoppingCartListProps {
  onClose: () => void;
  isOpen: boolean;
}

const ShoppingCartList = ({ onClose, isOpen }: ShoppingCartListProps) => {
  const { cartList, removeFromCart, clearCart } = useShoppingCartStore();
  const { totalPrice } = useCartInfo();

  const handleRemove = useCallback(
    (id: string) => {
      removeFromCart(id);
    },
    [removeFromCart]
  );

  const content = useMemo(() => {
    if (!cartList || cartList.length === 0) {
      return (
        <div className="h-20 flex justify-center items-center">
          <span className="text-gray-500 font-bold">{messages.empty_cart}</span>
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-3">
        <Button
          iconLeft={<Trash2Icon width={16} height={16} />}
          className="bg-red-400! self-end"
          onClick={clearCart}
        >
          {messages.delete_all}
        </Button>
        {cartList.map((product) => (
          <ShoppingCartItem
            product={product}
            onRemove={handleRemove}
            key={product.id}
          />
        ))}

        <section className="self-end flex gap-2">
          <span className="text-gray-500">{messages.sum}:</span>
          <span className="text-sm md:text-base font-bold">
            {formatWithCommas(totalPrice)}
          </span>
          <span className="text-sm text-gray-400 font-medium">
            {messages.rial}
          </span>
        </section>
      </div>
    );
  }, [totalPrice, handleRemove, clearCart, cartList]);

  return (
    <Modal onClose={onClose} isOpen={isOpen} title={messages.cart}>
      {content}
    </Modal>
  );
};

export default ShoppingCartList;
