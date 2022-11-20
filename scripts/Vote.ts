import { SetupSigner } from "./utils";

async function vote() {
    const [ballotContract, _] = await SetupSigner();
}

vote().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})