import IncrementAndDecrementProduct from "@/components/fragments/shoppingCart/IncrementAndDecrementProduct";
import { messages } from "@/messages/messages";
import { CartProduct } from "@/store";
import { formatWithCommas } from "@/utils";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

interface ShoppingCartItemProps {
  product: CartProduct;
  onRemove: (id: string) => void;
}
const ShoppingCartItem = ({ product, onRemove }: ShoppingCartItemProps) => {
  return (
    <div
      key={product.id}
      className="grid grid-cols-3 rounded-lg border border-gray-200 p-2 items-center"
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={100}
        height={100}
        className="rounded-lg"
      />

      <div className="flex flex-col gap-2">
        <span className="text-base md:text-lg font-bold">{product.name}</span>
        <div className="flex gap-1">
          <span className="text-sm md:text-base font-bold">
            {formatWithCommas(product.price)}
          </span>
          <span className="text-sm text-gray-400 font-medium">
            {messages.rial}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <Trash2Icon
          color="red"
          role="button"
          onClick={() => onRemove(product.id)}
          className="cursor-pointer"
          aria-label="remove from cart"
        />
        <IncrementAndDecrementProduct id={product.id} />
      </div>
    </div>
  );
};

export default memo(ShoppingCartItem);
