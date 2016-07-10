/**
 * Example
 *
 * If we have a constructor in the descendant, then we have to call the parent constructor manually.
 * Otherwise we'll get an error if we don't call super()
 * We have to call super() even if the parent class doesn't even have defined constructor.
 */

class Project {
    constructor(){
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
    constructor(){
        super();// we must call the parent constructor in this way in order to execute it
        console.log('constructing SoftwareProject');
    }
}

let p = new SoftwareProject();