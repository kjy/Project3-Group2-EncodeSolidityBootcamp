import { ethers, Wallet } from "ethers";
import { Ballot, Ballot__factory, MyToken, MyToken__factory } from "../typechain-types";
import * as dotenv from "dotenv";
import { SetupSigner } from "./utils";
dotenv.config()

async function deploy() {
    const signer = await SetupSigner();

    // Deploy ERC20
    const erc20Factory = new MyToken__factory(signer);
    const erc20Contract = await erc20Factory.deploy();
    await erc20Contract.deployed();
    console.log(`ERC20 Contract deployed at address ${erc20Contract.address}`)
}

deploy().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})