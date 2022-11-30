import { useWallet } from "@solana/wallet-adapter-react";
import React, { useState } from "react";
import { useHouse } from "../../hooks/useHouse";
import { InitHouse } from "../../interface/house";
import FormInput from "./FormInput";

const HouseForm = (props: any) => {
  const { setHouseModal, findHouses } = props;
  const { initializeHouse } = useHouse();
  const { publicKey } = useWallet();
  const [form, setForm] = useState<InitHouse>({
    name: "",
    address: "",
    country: "",
    district: "",
    house_number: "",
  });
  const onChangeHandler = (event: any) => {
    const id: string = event.target.id;
    setForm((preState: InitHouse) => ({
      ...preState,
      [id]: event.target.value,
    }));
  };

  const submitFormData = async (event: any) => {
    event.preventDefault();
    try {
      const tx = await initializeHouse(publicKey!, form);
      await findHouses();
      setHouseModal(false);
    } catch (error) {
      setHouseModal(false);
    }
  };

  return (
    <div className="absolute top-0 right-0 w-full h-full bg-black opacity-80 z-40">
      <div className="center bg-white rounded p-10 ">
        <div className="relative mb-10">
          <h2
            className="w-min h-min absolute top-0 right-0 cursor-pointer"
            onClick={() => setHouseModal(false)}
          >
            X
          </h2>
        </div>
        <form
          className="space-y-5 "
          onSubmit={(event) => submitFormData(event)}
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
            value={form.house_number}
            onChangeHandler={onChangeHandler}
            placeHolder="Enter your House No"
            id="house_number"
          />
          <FormInput
            value={form.district}
            onChangeHandler={onChangeHandler}
            placeHolder="Enter your district"
            id="district"
          />
          <FormInput
            value={form.country}
            onChangeHandler={onChangeHandler}
            placeHolder="Enter your Country"
            id="country"
          />

          <button
            type="submit"
            className="px-5 py-3 bg-indigo-700 text-white rounded "
          >
            Initialize House
          </button>
        </form>
      </div>
    </div>
  );
};

export default HouseForm;
