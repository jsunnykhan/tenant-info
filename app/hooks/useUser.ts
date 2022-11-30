import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { useEffect, useMemo, useState } from "react";
import * as anchor from "@project-serum/anchor";
import { IDL as usersIdl, Users } from "../interface/idl/users";
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
        const user: any = await program.account.userStruct.fetch(userPda);
        return user;
      } catch (error) {
        return null;
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

        return tx;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeUser = async (pubKey: PublicKey, removeHouse: Function) => {
    try {
      if (program) {
        const [userPda, _] = findProgramAddressSync(
          [USER_SEEDS, pubKey.toBuffer()],
          program.programId
        );

        const user = await getUserInfomation(pubKey);
        if (!user.mint.length) {
          const tx = await program.methods
            .removeUser()
            .accounts({
              authority: pubKey,
              userAccount: userPda,
              systemProgram: SystemProgram.programId,
            })
            .rpc();
        }

        if (user?.mint?.length) {
          const tx = await Promise.all(
            user.mint.map(async (d: PublicKey) => await removeHouse(d, pubKey))
          );
          console.log(tx);
        }
      }
    } catch (error) {}
  };

  return { getUserInfomation, initUser, removeUser };
};
