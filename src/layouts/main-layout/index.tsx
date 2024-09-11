import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="py-[74px] px-[92px] min-h-screen flex justify-center bg-rose-50 max-md:px-4 max-md:py-4">
      {children}
    </div>
  );
};

export default MainLayout;
