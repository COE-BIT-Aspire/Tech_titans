let employee = {
    name: "Priya",
    greeting : function(){
        let message = 'My name is '+ this.name + ' and I am working here'
        console.log(message);

    }   
}

console.log(employee.name);
console.log(employee.greeting);
employee.greeting();