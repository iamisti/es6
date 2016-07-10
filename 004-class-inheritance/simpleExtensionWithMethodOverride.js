/**
 * Example
 *
 * Simple extension. Extending a class and defining the same method will override the base class method.
 */

class Project {
    showId(){
        return 50;
    }
}

class SoftwareProject extends Project {

    showId(){
        // we could use super.showId() + 16 to achive the same result. E.g.: we can access to the overwritten method
        // by prefixing the methodname with super.
        return 66;
    }
}

let p = new SoftwareProject();

// this will print out 66
console.log(p.showId());