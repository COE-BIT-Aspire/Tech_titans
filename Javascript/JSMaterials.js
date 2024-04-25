function createPerson(firstName, lastName) { 
    return { 
        firstName: firstName, 
        lastName: lastName, 
        getFullName() { 
            return firstName + ' ' + lastName; 
        } 
    } 
} 
let name = createPerson('This is a', 'named function!'); 
  
console.log(name.getFullName()); 



()=> { 
    console.log("hey");
} 

var wel = function () { 
    return "Good morning";
}
var myname="Sujeeth";

function display(myname, wel){
    console.log(wel()+' '+myname);
}
display(myname,wel);


(function IIFE(){
    console.log("IIFE SUCCESS");
}
)

function myFirst() {
    let value = 1;

doSomething(() => {
  value = 2;
});
    
console.log(value);
}

function empName()
{
    console.log("His name is Sujeeth");
}
console.log(empName);//whole function is printed

console.log(__filename)
console.log(__dirname)

var x = 9;
function getName() {
    console.log("I am Sujeeth");
}
getName();
console.log(x);//I am Sujeeth 9

//If we write print stmt above declaration
getName();
console.log(x);// I am Sujeeth undefined
var x = 9;
function getName() {
    console.log("I am Sujeeth");
}// this is called as hoisting


var x = 3;
empId();//   1
console.log(x);//   3
function empId()
{
    var x = 1;
    console.log(x);
}


console.log(a);// not defined error
let a = 10;
console.log(ab);// undefined
var ab = 20;
