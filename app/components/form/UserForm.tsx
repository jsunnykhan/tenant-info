import { useWallet } from "@solana/wallet-adapter-react";
import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { initUser } from "../../interface/user";
import FormInput from "./FormInput";

const UserForm = (props: any) => {
  const { getData } = props;
  const [form, setForm] = useState<initUser>({
    name: "",
    address: "",
    nid: "",
  });
  const { initUser } = useUser();

  const { publicKey } = useWallet();

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
  return (
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
  );
};

export default UserForm;
