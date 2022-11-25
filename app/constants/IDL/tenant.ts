export type TenantInfo = {
  version: "0.1.0";
  name: "tenant_info";
  instructions: [
    {
      name: "createUser";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "userAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "fatherName";
          type: "string";
        },
        {
          name: "dateOfBirth";
          type: "string";
        },
        {
          name: "status";
          type: "string";
        },
        {
          name: "parmanentAddress";
          type: "string";
        },
        {
          name: "occupation";
          type: "string";
        },
        {
          name: "religion";
          type: "string";
        },
        {
          name: "education";
          type: "string";
        },
        {
          name: "nid";
          type: "string";
        },
        {
          name: "passport";
          type: "string";
        },
        {
          name: "birthCertificate";
          type: "string";
        },
        {
          name: "alternativeAddress";
          type: "string";
        }
      ];
    },
    {
      name: "registeredHouse";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "houseAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "address";
          type: "string";
        },
        {
          name: "houseNumber";
          type: "string";
        },
        {
          name: "district";
          type: "string";
        },
        {
          name: "country";
          type: "string";
        },
        {
          name: "isMultipleOwner";
          type: "bool";
        }
      ];
    },
    {
      name: "addAppartment";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "houseAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "appartmentNumber";
          type: "string";
        }
      ];
    },
    {
      name: "addTenant";
      accounts: [];
      args: [];
    },
    {
      name: "removeTenant";
      accounts: [];
      args: [];
    }
  ];
  accounts: [
    {
      name: "houseInfo";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "authority";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "address";
            type: "string";
          },
          {
            name: "houseNumber";
            type: "string";
          },
          {
            name: "appartments";
            type: "string";
          },
          {
            name: "district";
            type: "string";
          },
          {
            name: "country";
            type: "string";
          }
        ];
      };
    },
    {
      name: "appartment";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "number";
            type: "string";
          },
          {
            name: "familyMember";
            type: {
              vec: "publicKey";
            };
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "AddAppartment";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: {
              defined: "Signer<'info>";
            };
          },
          {
            name: "mint";
            type: {
              defined: "AccountInfo<'info>";
            };
          },
          {
            name: "houseAccount";
            type: {
              defined: "Account<'info,Appartment>";
            };
          },
          {
            name: "systemProgram";
            type: {
              defined: "Program<'info,System>";
            };
          }
        ];
      };
    }
  ];
};

export const IDL: TenantInfo = {
  version: "0.1.0",
  name: "tenant_info",
  instructions: [
    {
      name: "createUser",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "fatherName",
          type: "string",
        },
        {
          name: "dateOfBirth",
          type: "string",
        },
        {
          name: "status",
          type: "string",
        },
        {
          name: "parmanentAddress",
          type: "string",
        },
        {
          name: "occupation",
          type: "string",
        },
        {
          name: "religion",
          type: "string",
        },
        {
          name: "education",
          type: "string",
        },
        {
          name: "nid",
          type: "string",
        },
        {
          name: "passport",
          type: "string",
        },
        {
          name: "birthCertificate",
          type: "string",
        },
        {
          name: "alternativeAddress",
          type: "string",
        },
      ],
    },
    {
      name: "registeredHouse",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "houseAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "address",
          type: "string",
        },
        {
          name: "houseNumber",
          type: "string",
        },
        {
          name: "district",
          type: "string",
        },
        {
          name: "country",
          type: "string",
        },
        {
          name: "isMultipleOwner",
          type: "bool",
        },
      ],
    },
    {
      name: "addAppartment",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "houseAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "appartmentNumber",
          type: "string",
        },
      ],
    },
    {
      name: "addTenant",
      accounts: [],
      args: [],
    },
    {
      name: "removeTenant",
      accounts: [],
      args: [],
    },
  ],
  accounts: [
    {
      name: "houseInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "authority",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "address",
            type: "string",
          },
          {
            name: "houseNumber",
            type: "string",
          },
          {
            name: "appartments",
            type: "string",
          },
          {
            name: "district",
            type: "string",
          },
          {
            name: "country",
            type: "string",
          },
        ],
      },
    },
    {
      name: "appartment",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "number",
            type: "string",
          },
          {
            name: "familyMember",
            type: {
              vec: "publicKey",
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "AddAppartment",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: {
              defined: "Signer<'info>",
            },
          },
          {
            name: "mint",
            type: {
              defined: "AccountInfo<'info>",
            },
          },
          {
            name: "houseAccount",
            type: {
              defined: "Account<'info,Appartment>",
            },
          },
          {
            name: "systemProgram",
            type: {
              defined: "Program<'info,System>",
            },
          },
        ],
      },
    },
  ],
};
