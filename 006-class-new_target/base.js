/**
 * new.target is mainly used in constructors.
 * It's pointing to the constructor function directly.
 * It's useful when you start working with inheritance and extending other classes.
 */

class Project {
    constructor(){
        // will prints out 'function'
        console.log(typeof new.target);
    }
}

let p = new Project();


class Project2 {
    constructor(){
        // will prints out 'constructor(){ console.log(new.target); }'
        console.log(new.target);
    }
}



class Animal {
    constructor(){
        // this will prints out: 'constructor(){ super(); }'
        // e.g. the constructor that was originally called.
        console.log(new.target);
    }
}

class Dog extends Animal {
    constructor(){
        super();
    }
}

var d = Dog();

// example for it:
class Vehicle {
    constructor(){
        console.log(new.target.getDefaultId());
    }
}

class Car extends Vehicle{
    static getDefaultId(){
        return 99;
    }
}

var c = new Car();