const { ethers } = require("hardhat");
const { AC0_TOKEN_ADDRESS } = require("../constants/token");

async function main() {
  const exchangeContract = await ethers.getContractFactory("Exchange");
  const deployedContract = await exchangeContract.deploy(AC0_TOKEN_ADDRESS);
  await deployedContract.deployed();

  console.log("Deployed Exchange Contract Address", deployedContract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
