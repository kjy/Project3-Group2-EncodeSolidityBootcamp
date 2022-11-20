import { SetupSigner } from "./utils";

async function checkVotePower() {
    const [ballotContract, _] = await SetupSigner();
}

checkVotePower().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})