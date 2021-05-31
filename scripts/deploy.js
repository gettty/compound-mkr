async function main() {
    // We get the contract to deploy
    const CErc20 = await ethers.getContractFactory("CErc20");
    const cerc20 = await CErc20.deploy();
  
    console.log("CErc20 deployed to:", cerc20.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });