/**
 * Using let keyword will no longer be attached to the object (nor with var)
 */

class Project {
    constructor(){
        let loc = 'Zurich';
    }
}

class SoftwareProject extends Project {
    constructor(){
        super();
    }
}

let p = new SoftwareProject();

// this will prints out undefined
console.log(p.let);