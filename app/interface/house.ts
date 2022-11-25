import { PublicKey } from "@solana/web3.js";

export interface House {
  name: string;
  mint: PublicKey;
  appartment: Array<PublicKey> | [];
  address: string;
  house_number: string;
  district: string;
  country: string;
}
