import { ethers } from "ethers";
import { Ballot__factory } from "../typechain-types";
import * as dotenv from "dotenv";
import { SetupSigner } from "./utils";
import { tokenContractAddress } from "./constants";
dotenv.config()

function convertStringArrayToBytes32(array: string[]) {
    const bytes32Array = [];
    for (let i = 0; i < array.length; i++) {
        bytes32Array.push(ethers.utils.formatBytes32String(array[i]));
    }
    return bytes32Array;
}

async function deploy() {
    // get commnad line args for proposals
    const args = process.argv;
    const proposals = args.slice(2);

    if (proposals.length <= 0) throw new Error("Not enough parameters");

    console.log("Proposals: ");
    proposals.forEach((el, i) => {
        console.log(`proposal ${i + 1}: ${el}`)
    })

    const signer = await SetupSigner();
    const provider = ethers.getDefaultProvider("goerli", { etherscan: process.env.ETHERSCAN_API_KEY })

    // Deploy TokenizedBallot
    const ballotFactory = new Ballot__factory(signer);

    // setup other parameters required to deploy contract
    const currentBlock = await provider.getBlock("latest");

    // deploy contract
    const ballotContract = await ballotFactory.deploy(
        convertStringArrayToBytes32(proposals),
        tokenContractAddress,
        currentBlock.number
    )
    await ballotContract.deployed();
    console.log(`Ballot contract deployed at ${ballotContract.address}`);
}

deploy().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})