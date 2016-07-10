/**
 * There is a possibility defining static members to a class (and not to the object) with the 'static' keyword.
 */

class Project {

    // this is still not possible in ES6. Only methods can be static.
    // a workaround is possible: Project.id = 0 after the class declaration does the trick.
    //static let id = 0;

    static getDefaultId(){
        return 0;
    }
}

// this will prints out 0
console.log(Project.getDefaultId());

// this will throw an error: 'Object doesn't support property or method getDefaultId'
var p = new Project();
//console.log(p.getDefaultId());