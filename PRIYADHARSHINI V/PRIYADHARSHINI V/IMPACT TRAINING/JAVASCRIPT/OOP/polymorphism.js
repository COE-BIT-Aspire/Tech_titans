class Animal{

    constructor(name){
        this.name = name 
    }

    eats(){
        console.log (this.name+ '  eats food');
    }
}

class Dog extends Animal{

    eats(){
        super.eats();
        console.log (this.name+ ' eats biscuits');
    }
}

let puppy = new Dog('murphy');
puppy.eats();