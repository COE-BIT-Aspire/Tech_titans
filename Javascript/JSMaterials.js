function createAccount(firstName, lastName) { 
    return { 
        firstName: firstName, 
        lastName: lastName, 
        getFullName() { 
            return firstName + ' ' + lastName; 
        } 
    } 
} 
let name = createAccount('Sujeeth', 'Kandasamy!'); 

console.log(name.getFullName()); 



()=> { 
    console.log("Created Successfully!!");
} 

var wel = function () { 
    return "Welcome";
}
var myname="Sujeeth";

function display(myname, wel){
    console.log(wel()+' '+myname);
}
display(myname,wel);



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
console.log(__dirname);

var roomNumber=200;
function Status() {
    console.log("Room booked successfully!!");
}
Status();
console.log("Your room number is "+roomNumber);//I am Sujeeth 9

//If we write print stmt above declaration
Status();
console.log("Your room number is "+roomNumber);
var roomNumber = 200;
function Status() {
console.log("Your room number is "+roomNumber);//I am Sujeeth 9
}// this is called as hoisting


var x = 3;
empId();//   1
console.log(x);//   3
function empId()
{
    var x = 1;
    console.log(x);
}


console.log(amount);// not defined error
let amount = 10;
console.log(totalDays);// undefined
var totalDays = 20;
