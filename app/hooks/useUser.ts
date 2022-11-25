import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { useEffect, useMemo, useState } from "react";
import { useProgram } from "./useProgram";
import * as anchor from "@project-serum/anchor";
import { IDL as usersIdl, Users } from "../interface/userIdl";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { USER_SEEDS } from "../constants/seeds";

export const useUser = () => {
  const ID = process.env.NEXT_PUBLIC_USERS_ID;
  const [userProgramId, setUserProgramId] = useState<PublicKey | undefined>();
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();
  // const { userProgram } = useProgram();

  useEffect(() => {
    if (ID) {
      setUserProgramId(new PublicKey(ID));
    }
  }, [ID]);

  const program = useMemo(() => {
    if (anchorWallet && connection) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );

      if (userProgramId && provider) {
        return new anchor.Program(usersIdl, userProgramId, provider);
      }
    }
  }, [anchorWallet, connection, userProgramId]);

  const getUserInfomation = async (pubKey: PublicKey) => {
    if (program && pubKey) {
      try {
        const [userPda, _] = findProgramAddressSync(
          [USER_SEEDS, pubKey.toBuffer()],
          program.programId
        );
        const tx: any = await program.account.userStruct.fetch(userPda);
        return tx;
      } catch (error) {
        return error;
      }
    }
  };

  const initUser = async (
    name: string,
    address: string,
    nid: string,
    pubKey: PublicKey
  ) => {
    if (program && pubKey) {
      try {
        const [userPda, _] = findProgramAddressSync(
          [USER_SEEDS, pubKey.toBuffer()],
          program.programId
        );

        const tx = await program.methods
          .initializeUser(name, address, nid)
          .accounts({
            authority: pubKey,
            userAccount: userPda,
            systemProgram: SystemProgram.programId,
          })
          .rpc();

        console.log(tx);
        return tx;
      } catch (error) {
        console.log(error);
      }
    }
  };

  return { getUserInfomation, initUser };
};
