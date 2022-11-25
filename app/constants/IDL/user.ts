export type User = {
  version: "0.1.0";
  name: "user";
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
      name: "removeUser";
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
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "userInfo";
      type: {
        kind: "struct";
        fields: [
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
          },
          {
            name: "otherMember";
            type: {
              vec: "publicKey";
            };
          },
          {
            name: "signature";
            type: "publicKey";
          },
          {
            name: "comments";
            type: {
              vec: "string";
            };
          },
          {
            name: "house";
            type: {
              vec: "publicKey";
            };
          }
        ];
      };
    }
  ];
};

export const IDL: User = {
  version: "0.1.0",
  name: "user",
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
      name: "removeUser",
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
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "userInfo",
      type: {
        kind: "struct",
        fields: [
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
          {
            name: "otherMember",
            type: {
              vec: "publicKey",
            },
          },
          {
            name: "signature",
            type: "publicKey",
          },
          {
            name: "comments",
            type: {
              vec: "string",
            },
          },
          {
            name: "house",
            type: {
              vec: "publicKey",
            },
          },
        ],
      },
    },
  ],
};
