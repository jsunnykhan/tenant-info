import { AppProps } from "next/app";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { House } from "../../interface/house";

interface PropsType {
  house: House;
}

const SingleHouseCard = (props: PropsType) => {
  const { house } = props;

  const router = useRouter();
  return (
    <div
      className="rounded bg-gray-100 hover:cursor-pointer shadow-md hover:scale-[101%]"
      onClick={() => router.push(`/house/${house.mint}`)}
    >
      <Image
        src={"https://source.unsplash.com/user/c_v_r/100x100"}
        alt={house.name}
        width={400}
        height={400}
        className="rounded-t"
      />

      <div className="px-5 py-3">
        <h3>{house.name}</h3>
        <h4>{house.address}</h4>
        <h5>{house.house_number}</h5>
      </div>
    </div>
  );
};

export default SingleHouseCard;
