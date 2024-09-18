import React from "react";

interface AddToCardButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCardButtonProps> = ({ onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className="flex justify-center p-3 items-center w-[140px] h-[40px] bg-white border-2 border-rose-300 rounded-full hover:cursor-pointer hover:bg-slate-50"
    >
      <div role="presentation" className="flex flex-row items-center space-x-1">
        <img
          src="/assets/images/icon-add-to-cart.svg"
          className="h-[16px] w-[16px]"
          alt="add-to-cart"
        />
        <p className="text-sm text-rose-900 font-semibold">Add To Cart</p>
      </div>
    </div>
  );
};

export default AddToCartButton;
