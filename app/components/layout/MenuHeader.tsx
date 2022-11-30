import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import SearchBar from "../SearchBar";

const MenuHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-10">
        <div className="flex flex-1 justify-between items-center">
          <p>Tenant System</p>
          <div className="flex space-x-5 items-center">
            <SearchBar />
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
