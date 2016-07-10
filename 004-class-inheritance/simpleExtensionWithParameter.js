/**
 * Example
 *
 * Simple extension with parameter.
 * If we don't specify constructor in the descendant, then it'll automatically call the parent constructor.
 */

class Project {
    constructor(name){
        console.log(`constructing Project ${name}`);
    }
}

class SoftwareProject extends Project {

}

let p = new SoftwareProject('Banking');