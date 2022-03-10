import { expect } from "chai";
import { ethers } from "hardhat";
import { Greeter } from "../typechain";

let greeter: Greeter;
describe("Greeter", function () {
  before(async () => {
    greeter = await ethers.getContractAt(
      "IGreeter",
      "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    );
  });

  it("Should return the new greeting once it's changed", async function () {
    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
