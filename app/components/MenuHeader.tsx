import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";

const MenuHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-10">
        <div className="flex flex-1 justify-between">
          <p>Tenant System</p>
          <div className="flex space-x-5">
            <p>Search Bar</p>
            <p>Notification</p>
          </div>
        </div>

        <div className="self-end">
          <WalletMultiButton />
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
