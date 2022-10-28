import { PublicKey } from "@solana/web3.js";

export interface User {
  name: String;
  father_name: String;
  date_of_birth: String;
  status: Status;
  parmanent_address: String;
  occupation: String;
  religion: String;
  education: Education;
  nid: String;
  passport: String;
  birth_certificate: String;
  alternative_address: String;
  other_member: Array<PublicKey>;
  house: Array<House>;
  comments: Array<String>;
}

interface House {
  key: PublicKey;
  start: String;
  end: String;
}

export enum Status {
  SINGLE,
  MARRIED,
  DIVORCED,
}

export enum Education {
  PSC,
  JSC,
  SSC,
  HSC,
  BSC,
  MSC,
  PHD,
}
