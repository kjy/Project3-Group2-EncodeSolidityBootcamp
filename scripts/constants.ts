import { ethers, Wallet } from "ethers";
import { Ballot, Ballot__factory, MyToken, MyToken__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config()

const ballotContractAddress = "0x3dB15985d01971Fe4417d5dDd3B1F7E72fefF743";
const tokenContractAddress = "0x772Ef1798896080b2Eb51b32E68c1E2EE696009F";

export async function SetupSigner(): Promise<[Ballot, MyToken]> {
    const provider = ethers.getDefaultProvider("goerli", { etherscan: process.env.ETHERSCAN_API_KEY })
    let wallet: Wallet;

    if (process.env.MNEMONIC != "") {
        wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC ?? "")
    } else {
        wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "")
    }
    const signer = wallet.connect(provider)

    const ballotFactory = new Ballot__factory(signer);
    const ballotContract = await ballotFactory.attach(ballotContractAddress);

    const tokenFactory = new MyToken__factory(signer);
    const tokenContract = await tokenFactory.attach(tokenContractAddress);

    return [ballotContract, tokenContract];
}