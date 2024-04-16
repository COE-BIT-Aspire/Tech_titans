const employee = {
    name: "Priya",
    id: 101,
}

function printName(name){
    console.log(name);
}

printName()
printName(employee.name)
printName('Dharshini')



//MULTIPLE PARAMETERS

function printEmployee(name,id){
    console.log(name,id);
}

printEmployee(employee.name,employee.id)
printEmployee('Dharshini',102)


//passing the object as parameter

/*function printEmployee(employee){
    console.log(employee.name,employee.id);
}

printEmployee(employee)
printEmployee({ name:"Dharshini" , id:102})*/


//default value

function printId(id=103){
    console.log(id);
}

printId()
//printId(employee.id)


//rest parameter

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