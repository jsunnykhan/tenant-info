export type TenantInfo = {
    "version": "0.1.0",
    "name": "tenant_info",
    "instructions": [
      {
        "name": "createUser",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "userInfo",
            "type": {
              "defined": "UserInfo"
            }
          }
        ]
      },
      {
        "name": "modifyUser",
        "accounts": [],
        "args": []
      },
      {
        "name": "addHouse",
        "accounts": [],
        "args": []
      },
      {
        "name": "addTenant",
        "accounts": [],
        "args": []
      },
      {
        "name": "removeTenant",
        "accounts": [],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "userInfo",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "name",
              "type": "string"
            },
            {
              "name": "fatherName",
              "type": "string"
            },
            {
              "name": "dateOfBirth",
              "type": "string"
            },
            {
              "name": "status",
              "type": {
                "option": {
                  "defined": "Status"
                }
              }
            },
            {
              "name": "parmanentAddress",
              "type": "string"
            },
            {
              "name": "occupation",
              "type": "string"
            },
            {
              "name": "religion",
              "type": "string"
            },
            {
              "name": "education",
              "type": {
                "option": {
                  "defined": "Education"
                }
              }
            },
            {
              "name": "nid",
              "type": "string"
            },
            {
              "name": "passport",
              "type": {
                "option": "string"
              }
            },
            {
              "name": "birthCertificate",
              "type": {
                "option": "string"
              }
            },
            {
              "name": "alternativeAddress",
              "type": "string"
            },
            {
              "name": "otherMember",
              "type": {
                "vec": "publicKey"
              }
            },
            {
              "name": "signature",
              "type": "publicKey"
            },
            {
              "name": "house",
              "type": {
                "vec": {
                  "defined": "House"
                }
              }
            },
            {
              "name": "comments",
              "type": {
                "vec": "string"
              }
            }
          ]
        }
      }
    ],
    "types": [
      {
        "name": "House",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "key",
              "type": "publicKey"
            },
            {
              "name": "start",
              "type": "string"
            },
            {
              "name": "end",
              "type": "string"
            }
          ]
        }
      },
      {
        "name": "Status",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "SINGLE"
            },
            {
              "name": "MARRIED"
            },
            {
              "name": "DIVORCED"
            }
          ]
        }
      },
      {
        "name": "Education",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "PSC"
            },
            {
              "name": "JSC"
            },
            {
              "name": "SSC"
            },
            {
              "name": "HSC"
            },
            {
              "name": "BSC"
            },
            {
              "name": "MSC"
            },
            {
              "name": "PHD"
            }
          ]
        }
      }
    ]
  };
  
  export const IDL: TenantInfo = {
    "version": "0.1.0",
    "name": "tenant_info",
    "instructions": [
      {
        "name": "createUser",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "userAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "userInfo",
            "type": {
              "defined": "UserInfo"
            }
          }
        ]
      },
      {
        "name": "modifyUser",
        "accounts": [],
        "args": []
      },
      {
        "name": "addHouse",
        "accounts": [],
        "args": []
      },
      {
        "name": "addTenant",
        "accounts": [],
        "args": []
      },
      {
        "name": "removeTenant",
        "accounts": [],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "userInfo",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "name",
              "type": "string"
            },
            {
              "name": "fatherName",
              "type": "string"
            },
            {
              "name": "dateOfBirth",
              "type": "string"
            },
            {
              "name": "status",
              "type": {
                "option": {
                  "defined": "Status"
                }
              }
            },
            {
              "name": "parmanentAddress",
              "type": "string"
            },
            {
              "name": "occupation",
              "type": "string"
            },
            {
              "name": "religion",
              "type": "string"
            },
            {
              "name": "education",
              "type": {
                "option": {
                  "defined": "Education"
                }
              }
            },
            {
              "name": "nid",
              "type": "string"
            },
            {
              "name": "passport",
              "type": {
                "option": "string"
              }
            },
            {
              "name": "birthCertificate",
              "type": {
                "option": "string"
              }
            },
            {
              "name": "alternativeAddress",
              "type": "string"
            },
            {
              "name": "otherMember",
              "type": {
                "vec": "publicKey"
              }
            },
            {
              "name": "signature",
              "type": "publicKey"
            },
            {
              "name": "house",
              "type": {
                "vec": {
                  "defined": "House"
                }
              }
            },
            {
              "name": "comments",
              "type": {
                "vec": "string"
              }
            }
          ]
        }
      }
    ],
    "types": [
      {
        "name": "House",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "key",
              "type": "publicKey"
            },
            {
              "name": "start",
              "type": "string"
            },
            {
              "name": "end",
              "type": "string"
            }
          ]
        }
      },
      {
        "name": "Status",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "SINGLE"
            },
            {
              "name": "MARRIED"
            },
            {
              "name": "DIVORCED"
            }
          ]
        }
      },
      {
        "name": "Education",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "PSC"
            },
            {
              "name": "JSC"
            },
            {
              "name": "SSC"
            },
            {
              "name": "HSC"
            },
            {
              "name": "BSC"
            },
            {
              "name": "MSC"
            },
            {
              "name": "PHD"
            }
          ]
        }
      }
    ]
  };
  