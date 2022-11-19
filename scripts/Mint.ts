import { ethers } from "ethers";
import { SetupSigner } from "./constants";

const MINT_TOKENS = ethers.utils.parseEther("1000");

async function giveVotingTokens() {
    const [ballotContract, tokenContract] = await SetupSigner();

    const participants = process.argv.slice(2);

    if (participants.length <= 0) throw new Error("Not enough parameters");

    participants.forEach(async p => {
        const mintTx = await tokenContract.mint(p, MINT_TOKENS);
        await mintTx.wait()
        let voterTokenBalance = await tokenContract.balanceOf(p);
        console.log(`After mint voter ${p} has a total of ${voterTokenBalance} decimal units`);
    });
}

giveVotingTokens().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})