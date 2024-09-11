import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type DrawerState = {
  open: boolean;
};

type DrawerAction = {
  setOpen: (open: boolean) => void;
};

export const useDrawerStore = create<DrawerState & DrawerAction>()(
  immer((set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open: open }),
  }))
);
