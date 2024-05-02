class Employee{

    setEmployeeDetails(name, id) {
        this.name=name;
        this.id=id;
    }
    
    getEmployeeName(){
        return this.name;
    }
    getEmployeeId(){
        return this.id; 
    }

}

let employee1=new Employee();

employee1.setEmployeeDetails('Priya', 101);
console.log(employee1.getEmployeeName());
console.log(employee1.getEmployeeId());