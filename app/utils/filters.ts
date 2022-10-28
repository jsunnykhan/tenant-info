export const userFilter = (userBase58Publickey: string) => ({
  memcmp: {
    offset: 8,
    bytes: userBase58Publickey,
  },
});
