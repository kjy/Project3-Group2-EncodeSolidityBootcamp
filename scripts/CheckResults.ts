import { SetupSigner } from "./utils";

async function checkResults() {
    const [ballotContract, _] = await SetupSigner();
}

checkResults().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})