//SPREAD OPERATOR




//REST PARAMETER

let employee1 = {
    name: "Janani",
    id: 201,
}

let employee2 = {
    name: "Nila",
    id: 202,
}

function displayName(...name){
    console.log(name);
}

displayName(employee1.name , employee2.name , 'Sam')