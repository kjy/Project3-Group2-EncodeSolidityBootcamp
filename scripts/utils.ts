import { ethers, Wallet } from "ethers";
import { Ballot, Ballot__factory, MyToken, MyToken__factory } from "../typechain-types";
import { ballotContractAddress, tokenContractAddress } from "./constants";
import * as dotenv from "dotenv";
dotenv.config()

export async function SetupSigner(): Promise<Wallet> {
    const provider = ethers.getDefaultProvider("goerli", { etherscan: process.env.ETHERSCAN_API_KEY })
    let wallet: Wallet;

    if (process.env.MNEMONIC != "") {
        wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC ?? "")
    } else {
        wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "")
    }
    return wallet.connect(provider)
}

export async function ballotContract(signer: Wallet): Promise<Ballot> {
    const ballotFactory = new Ballot__factory(signer);
    return await ballotFactory.attach(ballotContractAddress);
}

export async function tokenContract(signer: Wallet): Promise<MyToken> {
    const tokenFactory = new MyToken__factory(signer);
    return await tokenFactory.attach(tokenContractAddress);
}