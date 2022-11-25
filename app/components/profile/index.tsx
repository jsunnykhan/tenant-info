import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { initUser } from "../../interface/user";
import FormInput from "../FormInput";
import Profile from "./Profile";

const ProfileContainer = () => {
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { getUserInfomation, initUser } = useUser();
  const [form, setForm] = useState<initUser>({
    name: "",
    address: "",
    nid: "",
  });

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

  const initializeUser = async (event: any) => {
    event.preventDefault();
    if (publicKey) {
      if (form.name && form.address && form.nid) {
        console.log("first");
        const tx = await initUser(form.name, form.address, form.nid, publicKey);
        if (tx) {
          await getData(publicKey);
        }
      } else {
        console.log("something missing");
      }
    }
  };

  const onChangeHandler = (event: any) => {
    const id: string = event.target.id;
    setForm((preState: initUser) => ({
      ...preState,
      [id]: event.target.value,
    }));
  };

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  return (
    <div className="mt-10">
      {user ? (
        <Profile user={user} />
      ) : !isLoading && !user ? (
        <div className="">
          <form
            className="space-y-5 w-full"
            onSubmit={(event) => initializeUser(event)}
          >
            <FormInput
              value={form.name}
              onChangeHandler={onChangeHandler}
              placeHolder="Enter your name"
              id="name"
            />
            <FormInput
              value={form.address}
              onChangeHandler={onChangeHandler}
              placeHolder="Enter your address"
              id="address"
            />
            <FormInput
              value={form.nid}
              onChangeHandler={onChangeHandler}
              placeHolder="Enter your NID"
              id="nid"
            />

            <button
              type="submit"
              className="px-5 py-3 bg-indigo-700 text-white rounded "
            >
              Initialize User
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileContainer;
