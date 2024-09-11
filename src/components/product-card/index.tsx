import React from "react";
import { Dessert } from "@/constants/type";
import AddToCartButton from "../add-to-card-button";
import { useCartStore } from "@/stores/cart";
import SelectQuantity from "../select-quantity";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

interface ProductCardProps {
  data: Dessert;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { setCart, carts } = useCartStore();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const currentQty = carts.find((cart) => cart.id === data.name)?.qty || 0;

  const increaseQty = () => {
    const result = currentQty + 1;
    setCart({
      qty: result,
      id: data.name,
      name: data.name,
      price: data.price,
      image: data.image.thumbnail,
    });
  };

  const decreaseQty = () => {
    const result = currentQty - 1;
    setCart({
      qty: result,
      id: data.name,
      name: data.name,
      price: data.price,
      image: data.image.thumbnail,
    });
  };

  return (
    <div>
      <div
        className={clsx(
          currentQty > 0 && "border border-red",
          "h-[200px] w-[200px] bg-center bg-cover bg-no-repeat max-lg:w-full rounded-xl"
        )}
        style={{
          backgroundImage: `url("${
            isMobile
              ? data.image.mobile
              : isTablet
              ? data.image.tablet
              : data.image.desktop
          }")`,
        }}
      />
      <div className="w-full flex justify-center mt-[-20px]">
        {currentQty === 0 ? (
          <AddToCartButton onClick={increaseQty} />
        ) : (
          <SelectQuantity
            qty={currentQty}
            onIncrease={increaseQty}
            onDecrease={decreaseQty}
          />
        )}
      </div>
      <p className="text-[12px] text-rose-500 mt-2">{data.category}</p>
      <p className="text-[16px] text-rose-900 font-semibold">{data.name}</p>
      <p className="text-[12px] text-red">${data.price}</p>
    </div>
  );
};

export default ProductCard;
