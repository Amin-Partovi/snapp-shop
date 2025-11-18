import { useShoppingCartStore } from "@/store";
import { useMemo } from "react";

export const useCartInfo = () => {
  const cartList = useShoppingCartStore((state) => state.cartList);

  const cartCount = useMemo(
    () => cartList.reduce((total, item) => total + item.count, 0),
    [cartList]
  );

  const totalPrice = useMemo(
    () => cartList.reduce((total, item) => total + item.price * item.count, 0),
    [cartList]
  );

  return {
    cartList,
    cartCount,
    totalPrice,
  };
};
