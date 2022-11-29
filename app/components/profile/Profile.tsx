import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useHouse } from "../../hooks/useHouse";
import { useUser } from "../../hooks/useUser";
import { House } from "../../interface/house";
import { User } from "../../interface/user";
import SingleHouseCard from "../house/singleHouseCard";

function Profile({ user }: any) {
  const { name, address } = user;
  const { publicKey } = useWallet();
  const { getHouses } = useHouse();
  const { removeUser } = useUser();
  const [houses, setHouses] = useState<Array<House> | []>();

  useEffect(() => {
    if (publicKey) {
      findHouses(publicKey);
    }
  }, [publicKey]);

  const findHouses = async (pubkey: PublicKey) => {
    const h = await getHouses(pubkey);
    setHouses([
      {
        name: "Abc Tower",
        address: "Abc Tower",
        appartment: [],
        country: "Bangladesh",
        district: "Dhaha",
        house_number: "32/a",
        mint: pubkey,
      },
      {
        name: "Abc Tower",
        address: "Abc Tower",
        appartment: [],
        country: "Bangladesh",
        district: "Dhaha",
        house_number: "32/a",
        mint: pubkey,
      },
    ]);
  };

  return (
    <div className="felx flex-col">
      <button
        className="bg-gray-500 px-5 py-4 rounded hover:cursor-pointer"
        onClick={() => removeUser(publicKey!)}
      >
        Remove User
      </button>
      <div className="flex justify-between">
        <div>
          <h2 className="font-semibold text-2xl">{name}</h2>
          <h2 className="font-medium text-lg">{address}</h2>
        </div>
        <div className="w-40">
          <Image
            alt="profile"
            src={"https://source.unsplash.com/user/c_v_r/100x100"}
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 w-full gap-4 mt-10">
        {houses?.map((data: any, index: number) => (
          <SingleHouseCard house={data} key={data.name + index} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
