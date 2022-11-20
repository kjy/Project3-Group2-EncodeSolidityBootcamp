async function checkResults() {
    // start here

}

checkResults().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})