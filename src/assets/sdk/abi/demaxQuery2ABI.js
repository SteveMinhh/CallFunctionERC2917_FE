export default [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "LIST_DGAS_AMOUNT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "LIST_TOKEN_FAILURE_BURN_PRECENT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "LIST_TOKEN_SUCCESS_BURN_PRECENT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PAIR_SWITCH",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PRODUCE_DGAS_RATE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PROPOSAL_DGAS_AMOUNT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "REMOVE_LIQUIDITY_DURATION",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "SWAP_FEE_PERCENT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TOKEN_PENGDING_SWITCH",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TOKEN_PENGDING_TIME",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TOKEN_TO_DGAS_PAIR_MIN_PERCENT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UNSTAKE_DURATION",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "VOTE_DURATION",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "VOTE_REWARD_PERCENT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "configAddr",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "countLiquidityList",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "countProposalList",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "countTokenList",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "delegate",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "factory",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "ballot_address",
        "type": "address"
      }
    ],
    "name": "generateProposal",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "proposer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "ballotAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "subject",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "createTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endBlock",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "end",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "YES",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "NO",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalReward",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ballotType",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "minted",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "voteIndex",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "audited",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "key",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "currentValue",
            "type": "uint256"
          }
        ],
        "internalType": "struct DemaxQuery2.Proposal",
        "name": "proposal",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_pair",
        "type": "address"
      }
    ],
    "name": "getPairReserve",
    "outputs": [
      {
        "internalType": "address",
        "name": "token0",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "token1",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "decimals0",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "decimals1",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "reserve0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserve1",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_pair",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getPairReserveWithUser",
    "outputs": [
      {
        "internalType": "address",
        "name": "token0",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "token1",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "decimals0",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "decimals1",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "reserve0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserve1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "balance0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "balance1",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "governance",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_end",
        "type": "uint256"
      }
    ],
    "name": "iterateLiquidityList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "pair",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "lp",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastBlock",
            "type": "uint256"
          }
        ],
        "internalType": "struct DemaxQuery2.Liquidity[]",
        "name": "liquidity_list",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_end",
        "type": "uint256"
      }
    ],
    "name": "iterateProposalList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "proposer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "ballotAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "subject",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "createTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endBlock",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "end",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "YES",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "NO",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalReward",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ballotType",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "minted",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "voteIndex",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "audited",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "key",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "currentValue",
            "type": "uint256"
          }
        ],
        "internalType": "struct DemaxQuery2.Proposal[]",
        "name": "proposal_list",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_end",
        "type": "uint256"
      }
    ],
    "name": "iterateReverseProposalList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "proposer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "ballotAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "subject",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "createTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endBlock",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "end",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "YES",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "NO",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalReward",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ballotType",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "minted",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "voteIndex",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "audited",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "key",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "currentValue",
            "type": "uint256"
          }
        ],
        "internalType": "struct DemaxQuery2.Proposal[]",
        "name": "proposal_list",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_end",
        "type": "uint256"
      }
    ],
    "name": "iterateTokenList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "decimal",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "allowance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "allowanceGov",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "status",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalSupply",
            "type": "uint256"
          }
        ],
        "internalType": "struct DemaxQuery2.Token[]",
        "name": "token_list",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "platform",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "path_list",
        "type": "address[]"
      }
    ],
    "name": "queryCondition",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "queryConfig",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "fee_percent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "proposal_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "unstake_duration",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "remove_duration",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "list_token_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "vote_percent",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "name",
        "type": "bytes32"
      }
    ],
    "name": "queryConfigInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "minValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxSpan",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "enable",
            "type": "uint256"
          }
        ],
        "internalType": "struct Config",
        "name": "config_item",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "queryLiquidityList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "pair",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "lp",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastBlock",
            "type": "uint256"
          }
        ],
        "internalType": "struct DemaxQuery2.Liquidity[]",
        "name": "liquidity_list",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "pair_list",
        "type": "address[]"
      }
    ],
    "name": "queryPairListInfo",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "token0_list",
        "type": "address[]"
      },
      {
        "internalType": "address[]",
        "name": "token1_list",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "reserve0_list",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "reserve1_list",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "token0_list",
        "type": "address[]"
      },
      {
        "internalType": "address[]",
        "name": "token1_list",
        "type": "address[]"
      }
    ],
    "name": "queryPairReserve",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "reserve0_list",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "reserve1_list",
        "type": "uint256[]"
      },
      {
        "internalType": "bool[]",
        "name": "exist_list",
        "type": "bool[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "pairs",
        "type": "address[]"
      }
    ],
    "name": "queryPairWeights",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "weights",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "queryProposalList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "proposer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "ballotAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "subject",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "createTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endBlock",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "end",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "YES",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "NO",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalReward",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ballotType",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "minted",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "voteIndex",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "audited",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "key",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "currentValue",
            "type": "uint256"
          }
        ],
        "internalType": "struct DemaxQuery2.Proposal[]",
        "name": "proposal_list",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "queryStakeInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "stake_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "stake_block",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "total_stake",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "queryTokenItemInfo",
    "outputs": [
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "decimal",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "queryTokenList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "decimal",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "allowance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "allowanceGov",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "status",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalSupply",
            "type": "uint256"
          }
        ],
        "internalType": "struct DemaxQuery2.Token[]",
        "name": "token_list",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "transferListener",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_config",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_platform",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_factory",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_governance",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_transferListener",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_delegate",
        "type": "address"
      }
    ],
    "name": "upgrade",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]