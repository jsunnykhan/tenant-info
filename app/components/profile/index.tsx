import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import React, { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import UserForm from "../form/UserForm";
import Profile from "./Profile";

const ProfileContainer = () => {
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { getUserInfomation } = useUser();

  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey && !user) {
      getData(publicKey);
    }
  }, [publicKey]);

  const getData = async (pubKey: PublicKey) => {
    setIsLoading(true);
    const data = await getUserInfomation(pubKey);
    setUser(data);
    setIsLoading(false);
  };

  return (
    <div className="mt-10">
      {user ? (
        <Profile user={user} />
      ) : isLoading ? (
        <h2>Loading</h2>
      ) : (
        <UserForm getData={getData} />
      )}
    </div>
  );
};

export default ProfileContainer;
