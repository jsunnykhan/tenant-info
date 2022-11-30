import { PublicKey } from "@solana/web3.js";

export interface InitHouse {
  name: string;
  address: string;
  house_number: string;
  district: string;
  country: string;
}
export interface HouseData {
  name: string;
  mint: PublicKey;
  appartment: Array<PublicKey> | [];
  address: string;
  house_number: string;
  district: string;
  country: string;
}
