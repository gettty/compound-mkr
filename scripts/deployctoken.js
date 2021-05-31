async function main() {
    // We get the contract to deploy
    const CErc20Delegator = await ethers.getContractFactory("CErc20Delegator");
    const cerc20delegator = await CErc20Delegator.deploy(
        "0xeef6de7ec2fAe93769b1c2E725D698b8a5D0fd9e",
        "0x2eaa9d77ae4d8f9cdd9faacd44016e746485bddb",
        "0x2341Ba42Eb00c63CF03559c9A2295a23ace7E4aD",
        "200000000000000000000000000",
        "Compound MakerDao Token",
        "cMKR",
        "8",
        "0xe4cd9a61431fbd268ea842d68533561262c17513",
        "0x9586074d2daeD6f81D49Ab5E581E7Ba70312a580",
        "0x"
      );
  
    console.log("CErc20 deployed to:", cerc20delegator.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

/*
{
        "underlying": "0xeef6de7ec2fAe93769b1c2E725D698b8a5D0fd9e",
        "comptroller": "0x2eaa9d77ae4d8f9cdd9faacd44016e746485bddb",
        "interestRateModel": "0x2341Ba42Eb00c63CF03559c9A2295a23ace7E4aD",
        "initialExchangeRateMantissa": "2.0e26",
        "name": "Compound MakerDao Token",
        "symbol": "cMKR",
        "decimals": "8",
        "admin": "0xe4cd9a61431fbd268ea842d68533561262c17513",
        "implementation": "0x9586074d2daeD6f81D49Ab5E581E7Ba70312a580",
        "becomeImplementationData": "0x"
      }
*/