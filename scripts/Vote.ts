import { SetupSigner } from "./constants";

async function vote() {
    const [ballotContract, _] = await SetupSigner();
}

vote().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})