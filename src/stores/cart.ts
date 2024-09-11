import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Cart = {
  id: string;
  name: string;
  qty: number;
  price: number;
  image: string;
};

type CartState = {
  carts: Cart[];
};

type CartAction = {
  setCart: (carts: Cart) => void;
  resetCart: () => void;
};

export const useCartStore = create<CartState & CartAction>()(
  immer((set) => ({
    carts: [],
    setCart: (carts) =>
      set(({ carts: cartState }) => {
        const index = cartState.findIndex((value) => value.id === carts.id);
        if (index !== -1) {
          const currentState = [...cartState];
          if (carts.qty === 0) {
            return {
              carts: currentState.filter((cart) => cart.id !== carts.id),
            };
          }
          currentState[index] = carts;
          return { carts: currentState };
        }
        return { carts: [...cartState, carts] };
      }),
    resetCart: () => set(() => ({ carts: [] })),
  }))
);
