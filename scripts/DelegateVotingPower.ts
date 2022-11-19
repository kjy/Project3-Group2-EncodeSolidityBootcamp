import { SetupSigner } from "./constants";

async function delegateVotingPower() {
    const ballotContract = await SetupSigner();
}

delegateVotingPower().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})