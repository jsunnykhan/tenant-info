import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import { useEffect, useMemo, useState } from "react";
import * as anchor from "@project-serum/anchor";

import { IDL as HouseIDL, House } from "../interface/idl/house";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { HOUSE_SEEDS, USER_SEEDS } from "../constants/seeds";
import { useUser } from "./useUser";
import { HouseData, InitHouse } from "../interface/house";

export const useHouse = () => {
  const ID = process.env.NEXT_PUBLIC_HOUSE_ID;
  const userId = process.env.NEXT_PUBLIC_USERS_ID;
  const [programId, setProgramId] = useState<PublicKey | undefined>(undefined);
  const [USER_PROGRAM_ID, setUSER_ID] = useState<PublicKey | undefined>(
    undefined
  );
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();

  const { getUserInfomation } = useUser();

  useEffect(() => {
    if (ID && userId) {
      setProgramId(new PublicKey(ID));
      setUSER_ID(new PublicKey(userId));
    }
  }, [ID, userId]);

  const program = useMemo(() => {
    if (anchorWallet && connection) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      if (programId && provider) {
        return new anchor.Program(HouseIDL, programId, provider);
      }
    }
  }, [anchorWallet, connection, programId]);

  const initializeHouse = async (pubKey: PublicKey, data: InitHouse) => {
    try {
      if (program && USER_PROGRAM_ID) {
        // every time need a unique key
        const mint = Keypair.generate();
        const [housePda, _] = findProgramAddressSync(
          [HOUSE_SEEDS, mint.publicKey.toBuffer()],
          program.programId
        );
        const [userPda, __] = findProgramAddressSync(
          [USER_SEEDS, pubKey.toBuffer()],
          USER_PROGRAM_ID
        );

        const tx = await program.methods
          .initializeHouse(
            mint.publicKey,
            data.name,
            data.address,
            data.house_number,
            data.district,
            data.country
          )
          .accounts({
            authority: pubKey,
            houseAccount: housePda,
            // mint: mint.publicKey,
            userAccount: userPda,
            userProgram: USER_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          })
          .rpc();
        return tx;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getHouseInformation = async (mintKey: PublicKey) => {
    if (program && mintKey) {
      try {
        const [housePda, _] = findProgramAddressSync(
          [HOUSE_SEEDS, mintKey.toBuffer()],
          program.programId
        );
        return program.account.houseStruct.fetch(housePda);
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  };

  const getHouses = async (pubkey: PublicKey) => {
    try {
      const user = await getUserInfomation(pubkey);
      if (user?.mint?.length) {
        const tx: any = await Promise.all(
          user.mint.map(async (mint: PublicKey) => {
            return await getHouseInformation(mint);
          })
        );
        if (tx) {
          return tx.map((data: any) => data);
        }
      }
      return [];
    } catch (error) {
      return [];
    }
  };

  const removeHouse = async (mintKey: PublicKey, pubKey: PublicKey) => {
    if (program) {
      const [housePda, _] = findProgramAddressSync(
        [HOUSE_SEEDS, mintKey.toBuffer()],
        program.programId
      );
      const tx = await program.methods
        .removeHouse(mintKey)
        .accounts({
          authority: pubKey,
          houseAccount: housePda,
          systemProgram: SystemProgram.programId,
        })
        .rpc();
    }
  };

  return { getHouseInformation, getHouses, initializeHouse, removeHouse };
};
