const { ethers } = require("hardhat");
const { expect } = require("chai");
describe("Transactions", function () {
  let Transactions, tx, owner, addr1;
  beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();
    Transactions = await ethers.deployContract("Transactions");
  });
  it("should add and retrieve a transaction", async () => {
    await Transactions.addToTransactions(
      addr1.address,
      ethers.parseEther("1.0"),
      "hi",
      "kw"
    );
    const all = await Transactions.getAllTransactions();
    expect(all.length).to.equal(1);
    expect(all[0].message).to.equal("hi");
  });
});
