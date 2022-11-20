async function vote() {

}

vote().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})