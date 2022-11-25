import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useEffect, useMemo, useState } from "react";
import * as anchor from "@project-serum/anchor";

import { IDL as HouseIDL, House } from "../interface/houseIdl";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { HOUSE_SEEDS } from "../constants/seeds";
import { useUser } from "./useUser";

export const useHouse = () => {
  const ID = process.env.NEXT_PUBLIC_HOUSE_ID;
  const [programId, setProgramId] = useState<PublicKey | undefined>();
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();

  const { getUserInfomation } = useUser();

  useEffect(() => {
    if (ID) {
      setProgramId(new PublicKey(ID));
    }
  }, [ID]);

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

  const getHouseInformation = async (mintKey: PublicKey) => {
    if (program && mintKey) {
      try {
        const [housePda, _] = findProgramAddressSync(
          [HOUSE_SEEDS, mintKey.toBuffer()],
          program.programId
        );

        const house = program.account.houseStruct.fetch(housePda);
        return house;
      } catch (error) {
        return error;
      }
    }
  };

  const getHouses = async (pubkey: PublicKey) => {
    const user = await getUserInfomation(pubkey);

    if (user?.mint) {
      const houses = Promise.all(
        user.mint.map(async (d: any) => await getHouseInformation(d))
      );

      return houses;
    }
    return [];
  };

  return { getHouseInformation, getHouses };
};
