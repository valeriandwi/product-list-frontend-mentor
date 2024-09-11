import { useCartStore } from "@/stores/cart";
import { useDrawerStore } from "@/stores/drawer";
import { useModalStore } from "@/stores/modal";
import React from "react";
import { useMediaQuery } from "react-responsive";

const ConfirmationOrder: React.FC = () => {
  const { setOpen: setOpenModal } = useModalStore();
  const { setOpen: setOpenDrawer } = useDrawerStore();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { carts } = useCartStore();

  return (
    <div className="w-[320px] h-fit bg-white rounded-lg py-6 px-5">
      <p className="text-lg text-red font-bold mb-8">
        Your Cart {carts.length > 0 && "(" + carts.length + ")"}
      </p>
      <div className="flex flex-col space-y-3">
        {carts.length > 0 ? (
          carts.map((cart) => (
            <>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-rose-900 text-[16px] mb-1">{cart.name}</p>
                  <p className="text-red text-sm">
                    {cart.qty}x{" "}
                    <span className="ml-4 text-rose-500">@{cart.price}</span>
                    <span className="ml-4 text-rose-500 font-semibold">
                      ${cart.price * cart.qty}
                    </span>
                  </p>
                </div>
                <img
                  src="/assets/images/icon-remove-item.svg"
                  className="border-1 border-rose-300 p-1 border rounded-full cursor-pointer"
                  alt="remove-icon"
                />
              </div>
              <hr className="mt-4" />
            </>
          ))
        ) : (
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/illustration-empty-cart.svg"
              className="h-[120px] mb-4"
              alt="empty-cart"
            />
            <p className="text-rose-500 font-semibold text-sm">
              Your added items will appear here
            </p>
          </div>
        )}
      </div>
      {carts.length > 0 && (
        <>
          <div className="mt-4 flex justify-between">
            <p>Order Total</p>
            <p className="text-rose-900 text-xl font-bold">
              ${carts.reduce((prev, { price, qty }) => prev + price * qty, 0)}
            </p>
          </div>
          <div className="mt-4 bg-rose-100 p-2 py-4 justify-center items-center rounded-lg flex space-x-1 w-full">
            <img
              src="/assets/images/icon-carbon-neutral.svg"
              alt="carbon-delivery"
            />
            <p className="text-sm">
              This is <b>carbon-neutral</b> delivery
            </p>
          </div>
          <button
            className="mt-4 bg-red w-full px-2 py-3 rounded-full text-white"
            onClick={() =>
              isTabletOrMobile ? setOpenDrawer(true) : setOpenModal(true)
            }
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default ConfirmationOrder;
