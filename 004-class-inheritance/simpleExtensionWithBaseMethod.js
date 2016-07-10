/**
 * Example
 *
 * Simple extension. Extending a class which has a function will be available in the parent class as well.
 */

class Project {
    constructor(){
        console.log('constructing Project');
    }

    showId(){
        return 50;
    }
}

class SoftwareProject extends Project {

}

let p = new SoftwareProject();

// this will print out 50
console.log(p.showId());