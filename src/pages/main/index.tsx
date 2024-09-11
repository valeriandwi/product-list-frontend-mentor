import React from "react";
import MainLayout from "@/layouts/main-layout";
import ProductList from "./product-list";
import ConfirmationOrder from "@/components/confirmation-order";
import { useModalStore } from "@/stores/modal";
import AppModal from "@/components/modal";
import OrderConfirmation from "./order-confirmation";
import { useMediaQuery } from "react-responsive";
import AppDrawer from "@/components/drawer";
import { useDrawerStore } from "@/stores/drawer";

const MainPage: React.FC = () => {
  const { open: openModal, setOpen: setOpenModal } = useModalStore();
  const { open: openDrawer, setOpen: setOpenDrawer } = useDrawerStore();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <MainLayout>
      <div className="flex flex-row space-x-6 max-md:flex-col max-md:space-x-0 max-md:space-y-6 space-y-0">
        <div>
          <h1 className="text-[32px] font-bold mb-8">Desserts</h1>
          <ProductList />
        </div>
        <ConfirmationOrder />
      </div>
      {isTabletOrMobile ? (
        <AppDrawer open={openDrawer}>
          <OrderConfirmation onClose={() => setOpenDrawer(false)} />
        </AppDrawer>
      ) : (
        <AppModal open={openModal}>
          <OrderConfirmation onClose={() => setOpenModal(false)} />
        </AppModal>
      )}
    </MainLayout>
  );
};

export default MainPage;
