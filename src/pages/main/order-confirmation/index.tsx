import { useCartStore } from "@/stores/cart";
import React from "react";

interface OrderConfirmationProps {
  onClose: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ onClose }) => {
  const { carts, resetCart } = useCartStore();

  return (
    <div className="p-8 flex flex-col space-y-4">
      <img
        src="./assets/images/icon-order-confirmed.svg"
        className="h-[48px] w-[48px]"
      />
      <div className="flex flex-col space-y-1">
        <p className="text-3xl font-bold text-rose-900">Order Confirmed</p>
        <p className="text-rose-500">We hope you enjoy your food!</p>
      </div>
      <div className="p-6 bg-rose-100 rounded-xl space-y-4">
        {carts.map((cart) => (
          <div className="flex flex-row items-center justify-between border-b-[1px] border-gray-200 pb-4">
            <div className="flex flex-row space-x-4">
              <img
                src={cart.image}
                className="rounded-xl h-[48px] w-[48px]"
                alt={cart.name + "-image"}
              />
              <div className="flex flex-col space-y-1">
                <p className="font-semibold text-rose-900">{cart.name}</p>
                <div className="flex flex-row space-x-4 text-sm">
                  <p className="text-red">{cart.qty}x</p>
                  <p className="text-gray-400">@${cart.price}</p>
                </div>
              </div>
            </div>
            <p className="text-rose-900 text-lg font-semibold">
              ${cart.qty * cart.price}
            </p>
          </div>
        ))}
        <div className="flex justify-between items-center py-2">
          <p className="text-rose-900">Order Total</p>
          <p className="text-rose-900 font-bold text-2xl">
            ${carts.reduce((prev, { price, qty }) => prev + price * qty, 0)}
          </p>
        </div>
      </div>
      <button
        className="bg-red p-3 rounded-full text-white w-full"
        onClick={() => {
          onClose();
          resetCart();
        }}
      >
        Start New Order
      </button>
    </div>
  );
};

export default OrderConfirmation;
