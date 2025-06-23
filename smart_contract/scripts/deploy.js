async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const Transactions = await ethers.getContractFactory("Transactions");
  const tx = await Transactions.deploy();
  await tx.waitForDeployment();

  console.log("Transactions deployed to:", tx.target);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
