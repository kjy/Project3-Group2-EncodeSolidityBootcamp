import * as dotenv from "dotenv";
import { ethers, Wallet } from "ethers";
import { Ballot__factory } from "../typechain-types";
dotenv.config()

async function checkResults() {
    const ballotContract = await SetupSigner();
}

checkResults().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})