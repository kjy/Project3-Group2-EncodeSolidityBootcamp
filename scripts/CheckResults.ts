async function checkResults() {

}

checkResults().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})