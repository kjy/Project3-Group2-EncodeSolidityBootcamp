import { SetupSigner } from "./constants";

async function checkResults() {
    const ballotContract = await SetupSigner();
}

checkResults().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})