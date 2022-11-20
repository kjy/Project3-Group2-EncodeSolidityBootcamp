import { SetupSigner } from "./utils";

async function checkVotePower() {
    const [ballotContract, _] = await SetupSigner();

    const voter = process.argv.slice(2);
    const votePower = await ballotContract.votePower(voter[0]);
    console.log(votePower)
}

checkVotePower().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})