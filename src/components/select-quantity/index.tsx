import DecrementIcon from "@/assets/icons/decrement-icon";
import IncrementIcon from "@/assets/icons/increment-icon";
import React from "react";

interface SelectQuantityProps {
  qty: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const SelectQuantity: React.FC<SelectQuantityProps> = ({
  qty,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div className="flex justify-between p-3 items-center w-[140px] cursor-pointer h-[40px] bg-red border border-1 border-rose-500 rounded-full">
      <span
        onClick={onDecrease}
        className="flex items-center border rounded-full p-1 hover:bg-white !text-white hover:!text-red"
      >
        <DecrementIcon />
      </span>
      <span className="text-rose-100 text-sm">{qty}</span>
      <span
        onClick={onIncrease}
        className="flex items-center border rounded-full p-1 hover:bg-white !text-white hover:!text-red"
      >
        <IncrementIcon />
      </span>
    </div>
  );
};

export default SelectQuantity;
