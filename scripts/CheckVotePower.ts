import { ethers, Wallet } from "ethers";
import { Ballot__factory } from "../typechain-types";
import { SetupSigner } from "./constants";

async function checkVotePower() {
    const ballotContract = await SetupSigner();
}

checkVotePower().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})