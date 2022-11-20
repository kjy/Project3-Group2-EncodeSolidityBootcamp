

import * from "./utils";
import { Wallet } from "ethers";
import { TokenizedBallots } from "../typechain-types";
// dotenv.config()
// import * as dotenv from "dotenv";
// dotenv.config()



async function checkResults() {
    // TODO
    
    let tokenContract: TokenizedBallots;
    
    // function from utils.ts
    tokenContract.SetUpSigner();

    // function from utils.ts
    tokenContract.ballotContract(signer: Wallet);

    // function from utils.ts
    tokenContract.tokenContract(signer: Wallet);

    // read winner name
    const winnerName = await tokenContract.winnerName();
    console.log(`winner name: $(winnerName})`);

    // read winning proposal
    const winningProposal = tokenContract.sol.winningProposal();
    console.log(`winning proposal: ${winningProposal}`);

}

checkResults().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})