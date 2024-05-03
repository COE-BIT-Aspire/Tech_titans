//SET TIMEOUT

function greet(){
    console.log("First Statement")

    setTimeout(()=> {
        console.log("Set Timeout limit expired") },5000);
    
    console.log("Last Satement")
}

greet()



//SET INTERVAL

/*function greet(){
    console.log("First Statement")

    setInterval(()=> {
        console.log("Snoozing") },5000);
    
    console.log("Last Satement")
}

greet()*/