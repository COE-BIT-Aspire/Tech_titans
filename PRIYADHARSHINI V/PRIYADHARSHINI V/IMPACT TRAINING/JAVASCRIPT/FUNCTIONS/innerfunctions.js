function getFullname(firstName,lastName){

    function joint(name1,name2){
        const name = name1 +' ' + name2;          
        return name;
    }

    const fullName = joint(firstName,lastName);          
     return fullName;
}

let fullName = getFullname('Priya','dharshini')

console.log(fullName)