/**
 * Example
 *
 * Simple extension. If we don't specify constructor in the descendant, then it'll automatically call the parent
 * default constructor.
 */

class Project {
    constructor(){
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {

}

let p = new SoftwareProject();