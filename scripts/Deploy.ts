async function deploy() {
}

deploy().catch((e) => {
    console.log(e);
    process.exitCode = 1;
})