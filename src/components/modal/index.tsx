import useComponentVisible from "@/hooks/useComponentVisible";
import { useModalStore } from "@/stores/modal";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

interface AppModalProps {
  open: boolean;
  children: React.ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({ open = false, children }) => {
  const { ref, isComponentVisible } = useComponentVisible(true);
  const { setOpen } = useModalStore();

  useEffect(() => {
    if (!isComponentVisible) setOpen(false);
  }, [isComponentVisible]);

  return (
    <motion.div
      id="static-modal"
      data-modal-backdrop="static"
      aria-hidden="true"
      animate={open ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={clsx(
        !open && "hidden",
        "fixed inset-0 z-50 flex justify-center items-center w-full h-full backdrop-brightness-50"
      )}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <motion.div
          className="relative rounded-lg shadow bg-white"
          ref={ref}
          initial={{ opacity: 1, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          animate={open ? { opacity: 1, y: 1 } : { opacity: 0 }}
          exit={{ x: 50 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppModal;
