import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type ModalState = {
  open: boolean;
};

type ModalAction = {
  setOpen: (open: boolean) => void;
};

export const useModalStore = create<ModalState & ModalAction>()(
  immer((set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open: open }),
  }))
);
