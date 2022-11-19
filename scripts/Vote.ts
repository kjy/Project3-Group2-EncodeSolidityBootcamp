import { SetupSigner } from "./constants";

async function vote() {
    const ballotContract = await SetupSigner();
}

vote().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})