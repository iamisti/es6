/**
 * There is nothing different with constructor functions.
 * Defining member variables goes in the same way.
 */

class Project {
    constructor(){
        this.location = 'Zurich';
    }
}

class SoftwareProject extends Project {
    constructor(){
        super();
    }
}

let p = new SoftwareProject();

// this will prints out 'Zurich'
console.log(p.location);