import { SetupSigner } from "./utils";

async function delegateVotingPower() {
    const [ballotContract, _] = await SetupSigner();
}

delegateVotingPower().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})