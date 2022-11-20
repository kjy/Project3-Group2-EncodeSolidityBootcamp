import * from "./utils.ts";
import * from "./constants.ts";
import { Wallet } from "ethers";
import { TokenizedBallots } from "../typechain-types";
// dotenv.config()
// import * as dotenv from "dotenv";
// dotenv.config()


async function vote() {
    // TODO
    
    let tokenContract: TokenizedBallots;
    // function from utils.ts
    tokenContract.SetUpSigner();

    // function from utils.ts
    tokenContract.ballotContract(signer: Wallet);

    // function from utils.ts
    tokenContract.tokenContract(signer: Wallet);
    
    
    const proposal = args[0];  // proposal index
    const amount = args[1];   // amount
    console.log(`Voting for ${vote}`);

    const tx = await tokenContract.vote(proposal, amount);
    
    vote().catch((e) => {
        console.log(e);
        process.exitCode = 1;
    });

};

// yarn run ts-node --files scripts/Vote.ts proposalIndexNum amount

    /*
    From TokenizedBallots.sol

    function vote(uint proposal, uint256 amount) external {
        require(votePower(msg.sender) >= amount, "Not enough vote power");
        proposals[proposal].voteCount += amount;
        spentVotingPower[msg.sender] += amount;
    }

    from constants.ts file
    
    export const ballotContractAddress: string = "";
    export const tokenContractAddress: string = "0x284A7042be8749c1b3A35509F27ebb09c2737956";

    */