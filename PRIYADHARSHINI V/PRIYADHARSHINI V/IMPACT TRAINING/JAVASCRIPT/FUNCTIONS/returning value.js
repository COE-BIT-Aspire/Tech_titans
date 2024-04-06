/*function printFullname(firstName,lastName){
    
    //if(firstName==='')
    //return;
    const name = firstName +' ' + lastName;
    return
    console.log(name)
}

printFullname('Priya','dharshini')*/


//returning the value outside the function

function getFullname(firstName,lastName){
    const name = firstName +' ' + lastName;          //can return numbers,string,arrays,object,functions
    //console.log(name)
    return name;
}

let fullName = getFullname('Priya','dharshini')

console.log(fullName)



//returning object

/*function getFullname(firstName,lastName){
    const name = {firstName:firstName,lastName:lastName};          //key name and parameter name same   {firstName,lastName}
    return name;
}

let fullName = getFullname('Priya','dharshini')

console.log(fullName)*/