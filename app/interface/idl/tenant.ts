export type Tenant = {
  "version": "0.1.0",
  "name": "tenant",
  "instructions": [
    {
      "name": "removeHouseCpi",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "mint",
          "type": "publicKey"
        }
      ]
    }
  ]
};

export const IDL: Tenant = {
  "version": "0.1.0",
  "name": "tenant",
  "instructions": [
    {
      "name": "removeHouseCpi",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "mint",
          "type": "publicKey"
        }
      ]
    }
  ]
};
