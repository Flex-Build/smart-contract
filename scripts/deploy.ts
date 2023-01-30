import { ethers } from "hardhat";

async function main() {

  const FlexBuild = await ethers.getContractFactory("FlexBuild")
  const flex_build = await FlexBuild.deploy();

  await flex_build.deployed();

  console.log(`FlexBuild deployed to ${flex_build.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
