You, a few seconds ago | 1 WebAuthnAssertion(you)
    //waiting(3000);

//console.log("function call has just ended");
function waitingFn(timeInMs) {
    const futureTime = Date.now() + timeInMs;

    while (futureTime > Date.now()) {
        // waiting

    }

}
debugger;
waitingFn(3000);