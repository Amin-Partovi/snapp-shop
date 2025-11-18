import { ProductT } from "@/lib/products/types"
import { create } from "zustand"
import { persist } from "zustand/middleware";

interface CartProduct extends ProductT {
    count: number
}

interface ShoppingCardStoreT {
    cartList: CartProduct[];
    addToCart: (product: ProductT) => void;
    removeFromCart: (id: string) => void;
    incrementCount: (id: string) => void;
    decrementCount: (id: string) => void;
    clearCart: () => void;
}

export const useShoppingCartStore = create<ShoppingCardStoreT>()(persist((set, get) => ({
    cartList: [],

    addToCart: (product: ProductT) => set((state) => {
        const existingProduct = state.cartList.find(item => item.id === product.id);

        if (existingProduct) {
            return {
                cartList: state.cartList.map(item =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                )
            };
        } else {
            return {
                cartList: [...state.cartList, { ...product, count: 1 }]
            };
        }
    }),

    removeFromCart: (id: string) => set((state) => ({
        cartList: state.cartList.filter(prod => prod.id !== id)
    })),

    incrementCount: (id: string) => set((state) => ({
        cartList: state.cartList.map(item =>
            item.id === id
                ? { ...item, count: item.count + 1 }
                : item
        )
    })),

    decrementCount: (id: string) => set((state) => {
        const existingProduct = state.cartList.find(item => item.id === id);

        if (existingProduct && existingProduct.count > 1) {
            return {
                cartList: state.cartList.map(item =>
                    item.id === id
                        ? { ...item, count: item.count - 1 }
                        : item
                )
            };
        } else {
            return {
                cartList: state.cartList.filter(item => item.id !== id)
            };
        }
    }),

    clearCart: () => set({ cartList: [] })

}), {
    name: "shoppingCart",

}));