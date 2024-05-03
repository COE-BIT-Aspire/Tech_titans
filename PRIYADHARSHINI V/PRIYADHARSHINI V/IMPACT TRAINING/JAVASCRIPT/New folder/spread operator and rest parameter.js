//SPREAD OPERATOR              //used in array

let shoppingCart=["Vegetables", "Fruits", "Snacks"]
let additionalCart=["Toys", "Masala"]

let newCart = [...shoppingCart,...additionalCart]
//let newCart = [...shoppingCart,45,"Juices",...additionalCart]
console.log(newCart)


//REST PARAMETER                 //used in function 

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