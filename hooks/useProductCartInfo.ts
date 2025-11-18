import { useMemo } from "react";
import { useShoppingCartStore } from "@/store/shoppingCartStore";


export const useProductCartCount = (productId: string) => {
    const cartList = useShoppingCartStore((state) => state.cartList);

    const productCount = useMemo(() => {
        const product = cartList.find(item => item.id === productId);
        return product ? product.count : 0;
    }, [cartList, productId]);

    return productCount;
};