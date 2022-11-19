import { ethers, Wallet } from "ethers";
import { Ballot, Ballot__factory, MyToken, MyToken__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config()

function convertStringArrayToBytes32(array: string[]) {
    const bytes32Array = [];
    for (let i = 0; i < array.length; i++) {
        bytes32Array.push(ethers.utils.formatBytes32String(array[i]));
    }
    return bytes32Array;
}

async function deploy() {
    let wallet: Wallet;
    let ballotContract: Ballot;
    let erc20Contract: MyToken;
    const provider = ethers.getDefaultProvider("goerli")

    // get commnad line args for proposals
    const args = process.argv;
    const proposals = args.slice(2);

    if (proposals.length <= 0) throw new Error("Not enough parameters");

    console.log("Proposals: ");
    proposals.forEach((el, i) => {
        console.log(`proposal ${i + 1}: ${el}`)
    })

    // setup signer and factory from wallet
    if (process.env.MNEMONIC != "") {
        wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC ?? "")
    } else {
        wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "")
    }
    const signer = wallet.connect(provider)
    console.log(signer.address)

    // Deploy ERC20
    const erc20Factory = new MyToken__factory(signer);
    erc20Contract = await erc20Factory.deploy();
    await erc20Contract.deployed();
    console.log(`ERC20 Contract deployed at address ${erc20Contract.address}`)

    // Deploy TokenizedBallot
    const ballotFactory = new Ballot__factory(signer);

    // setup other parameters required to deploy contract
    const currentBlock = await provider.getBlock("latest");

    // deploy contract
    ballotContract = await ballotFactory.deploy(
        convertStringArrayToBytes32(proposals),
        erc20Contract.address,
        currentBlock.number
    )
    await ballotContract.deployed();
    console.log(`Ballot contract deployed at ${ballotContract.address}`);
}

deploy().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})