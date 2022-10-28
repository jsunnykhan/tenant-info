import { useMemo } from "react";
import * as anchor from "@project-serum/anchor";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  IDL as tenantIDL,
  PROGRAM_ID,
  TenantInfo,
} from "../constants/IDL/tenantInfo";
import { Program } from "@project-serum/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { userFilter } from "../utils/filters";
import { User } from "../interface/user";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { USER_SEEDS } from "../constants/seeds";

const useTenant = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const anchorWallet = useAnchorWallet();

  const program: Program<TenantInfo> | undefined = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );

      return new anchor.Program(tenantIDL, PROGRAM_ID, provider);
    }
  }, [connection, anchorWallet]);

  const findUser = async (pubKey: PublicKey) => {
    if (program && publicKey) {
      const [userPda, bump] = findProgramAddressSync(
        [USER_SEEDS, publicKey.toBuffer()],
        program.programId
      );
      const filter = await program.account.userInfo.fetch(userPda);

      return filter;
    }
  };

  const createUser = async () => {
    if (program && publicKey) {
      const [userPda, bump] = findProgramAddressSync(
        [USER_SEEDS, publicKey.toBuffer()],
        program.programId
      );

      try {
        const tx = await program.methods
          .createUser()
          .accounts({
            authority: publicKey,
            userAccount: userPda,
            systemProgram: SystemProgram.programId,
          })
          .rpc();

        console.log(tx);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return { findUser, createUser };
};

export default useTenant;
