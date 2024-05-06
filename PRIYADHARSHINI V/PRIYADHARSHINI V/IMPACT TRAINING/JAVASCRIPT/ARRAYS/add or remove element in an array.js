//add element in an array
const products=["Laptop", "Mobile", "Computer"]

products.push("Tablet")                //at last
products.unshift("Charger")            //at first
products.splice(2,0,"Powerbank")       //at middle

console.log(products)



//remove element in an array
/*const products=["Laptop", "Mobile", "Computer","Tablet", "Charger", "Powerbank"]

products.pop()                //at last
products.shift()              //at first
products.splice(2,1)         //at middle

console.log(products)*/



//emptying an array
/*let products=["Laptop", "Mobile", "Computer"]

products=[]
//products.length=0;
//products.splice(0,products.length)
//while(products.length)
// products.pop()
console.log(products)*/



//combining two arrays
/*let shoppingCart = ["Vegetables", "Fruits", "Snacks"]
let additionalCart = ["Toys", "Masala"]

let newCart = shoppingCart.concat(additionalCart)
console.log(newCart)*/