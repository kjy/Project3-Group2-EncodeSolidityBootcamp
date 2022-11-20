import { SetupSigner } from "./utils";

async function giveVotingTokens() {
    const [ballotContract, tokenContract] = await SetupSigner();

}

giveVotingTokens().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})