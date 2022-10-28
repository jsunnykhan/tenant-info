import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PublicKey } from "@solana/web3.js";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTenant from "../hooks/useTenant";
import { Education } from "../interface/tenant";
import { Status, User } from "../interface/user";
import styles from "../styles/Home.module.css";

export default function Home() {
  const user: User = {
    name: "Sunny",
    father_name: "Shamsul alam khan",
    date_of_birth: "21-12-1996",
    status: Status.SINGLE,
    parmanent_address: "Basail Tangail",
    occupation: "Software Engr.",
    religion: "Islam",
    education: Education.BSC,
    nid: "123456789",
    passport: "456123",
    birth_certificate: "456123",
    alternative_address: "Dhaka ,Bangladesh",
    other_member: [],
    house: [],
    comments: [],
  };

  const { publicKey } = useWallet();
  const { createUser, findUser } = useTenant();

  const [users, setUsers] = useState();

  useEffect(() => {
    if (publicKey) {
      fetch(publicKey);
    }
  }, [publicKey]);

  const fetch = async (publicKey: PublicKey) => {
    const response = await findUser(publicKey);
    setUsers(response as any);
  };

  console.log(users);
  return (
    <div>
      <WalletMultiButton />
      <div></div>
      <button onClick={() => createUser()}>create user</button>
    </div>
  );
}
