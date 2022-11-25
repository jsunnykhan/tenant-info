import { PublicKey } from "@solana/web3.js";

export interface User {
  name: String;
  address: String;
  nid: String;
  authority: PublicKey;
  mint: Array<PublicKey>;
}

export interface initUser {
  name: string;
  address: string;
  nid: string;
}
