require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.5.16",
    settings : {
      "evmVersion": "istanbul",
        "libraries": {},
        "metadata": {
          "useLiteralContent": true
        },
        "optimizer": {
          "enabled": true,
          "runs": 200
        },
        "remappings": [],
        "outputSelection": {
          "*": {
            "*": [
              "evm.bytecode",
              "evm.deployedBytecode",
              "abi"
            ]
          }
        }
    }
  },
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/`,
      accounts: [`key`],
    }
  }
};
