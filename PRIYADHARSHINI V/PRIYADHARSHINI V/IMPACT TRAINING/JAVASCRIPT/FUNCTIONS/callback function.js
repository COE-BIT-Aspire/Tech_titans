//passing the function as a parameter to an another function

function mainFunction(getCallbackFunction) {
    console.log ('Main Function Executed')
    console.log(getCallbackFunction)
    //getCallbackFunction()
}

function callbackFunction() {
    console.log ('Callback Function Executed')
}

mainFunction(callbackFunction)
