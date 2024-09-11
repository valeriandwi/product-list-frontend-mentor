import { useDrawerStore } from "@/stores/drawer";
import React from "react";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

interface AppDrawerProps {
  open: boolean;
  children: React.ReactNode;
}

const AppDrawer: React.FC<AppDrawerProps> = ({ open, children }) => {
  const { setOpen } = useDrawerStore();

  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      direction="bottom"
      className="!h-fit"
    >
      {children}
    </Drawer>
  );
};

export default AppDrawer;
