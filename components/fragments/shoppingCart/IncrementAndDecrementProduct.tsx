"use client";

import { Button } from "@/components/elements";
import { useProductCartCount } from "@/hooks";
import { useShoppingCartStore } from "@/store";

interface IncrementAndDecrementProductProps {
  id: string;
}
const IncrementAndDecrementProduct = ({
  id,
}: IncrementAndDecrementProductProps) => {
  const count = useProductCartCount(id);
  const decrement = useShoppingCartStore((state) => state.decrementCount);
  const increment = useShoppingCartStore((state) => state.incrementCount);

  if (count === 0) {
    return;
  }
  return (
    <div className="flex items-center gap-4">
      <Button iconView onClick={() => increment(id)}>
        +
      </Button>

      {count}

      <Button iconView onClick={() => decrement(id)}>
        -
      </Button>
    </div>
  );
};

export default IncrementAndDecrementProduct;
