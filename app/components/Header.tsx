import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <ul className="flex flex-1 justify-between">
          <li>Tenant System</li>
          <li>Search Bar</li>
          <li>Notification</li>
        </ul>

        <div className="self-end">
          <WalletMultiButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
