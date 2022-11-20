import { ethers } from "ethers";
import { SetupSigner } from "./utils";

const MINT_TOKENS = ethers.utils.parseEther("1000");

async function giveVotingTokens() {
    const [ballotContract, tokenContract] = await SetupSigner();

    const args = process.argv.slice(2);
    if (args.length != 2) throw new Error("Expecting exactly 2 args");
    const voter = args[0];
    const mintAmount = ethers.utils.parseEther(args[1]);

    const mintTx = await tokenContract.mint(voter, MINT_TOKENS);
    await mintTx.wait()
    let voterTokenBalance = await tokenContract.balanceOf(voter);
    console.log(`After mint voter ${voter} has a total of ${voterTokenBalance} decimal units`);
}

giveVotingTokens().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})