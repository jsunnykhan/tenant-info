import React from "react";
import { WalletConnectionProvider } from "../hooks/WalletConnectionProvider";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <WalletConnectionProvider>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[80%]">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </WalletConnectionProvider>
  );
};

export default Layout;
