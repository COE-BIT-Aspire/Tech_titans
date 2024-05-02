function Employee(name, id, baseSalary){
    this.name = name;
    this.id = id;
    this.baseSalary = baseSalary;
    
    let monthlyBonus = 1000;

    let calculateFinalSalary = function (){
        let finalSalary = baseSalary + monthlyBonus;
        console.log ('Final Salary is : '+finalSalary);
    }
    this.getEmployeeDetails = function (){
        console.log('Name : '+this.name+ '  | Id : '+this.id);    
        calculateFinalSalary();
    }
}

let employee1 = new Employee('Priya', 101, 5000);
employee1.getEmployeeDetails();



//employee1.monthlyBonus=3000;
//employee1.calculateFinalSalary();