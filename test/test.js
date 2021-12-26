const {expect} = require("chai");


describe("MyContract", function(){
    it("should return correct name and symbol", async function(){
        const MyContract = await hre.ethers.getContractFactory("MyContract");

        const myContractDeployed = await MyContract.deploy("NidContract","NCX");

        await myContractDeployed.deployed();
        expect(await myContractDeployed.name()).to.equal("NidContract");
        expect(await myContractDeployed.symbol()).to.equal("NCX");
    });
}); 