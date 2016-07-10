/**
 * Example
 */
class Task {

}

// #1 Prints out 'function'.
// Classes in ES6 are just syntactic sugar. They are basically constructor functions.
console.log(typeof Task);

/**
 * Example
 */
class Product {

    // shorthand for function showId(){ ... }
    showId() {

    }
}

let prod = new Product();
// #2 prod is instance of Product (prints out true)
console.log(prod instanceof Product);

// #3 prod.showId is the same function as Product's prototype function (prints out true)
console.log(prod.showId === Product.prototype.showId);


/**
 * Example
 */
class Client {
    constructor(){
        console.log('constructing Client');
    }

    showId(){
        console.log('42');
    }
}

// will print out 'constructing Client';
let client = new Client();

/**
 * Example
 */
// The following code will throw an error: 'Use before declaration'.
// The reason is: classes are not hoisted in ES6.
//let employee = new Employee();

class Employee {
    constructor(){
        console.log('constructing Employee');
    }
}


/**
 * Example
 */
// Same as with functions we can assign it to a variable.
let something = class Animal{
    constructor(){
        console.log('constructing Animal');
    }
};

new something();


/**
 * Example - changing 'this' reference is not possible with classes
 */
/*
// With functions we can easily do the following:
let Abc = function(){
    console.log('calling Abc');
};

let task = {};
// this call will print out 'calling Abc'.
Abc.call(task);

// but with the class syntax:
class Bcd {
    constructor(){
        console.log('constructing Bcd');
    }
}

let task2 = {};

// this will throw an error:
Bcd.call(task2);
*/

/**
 * Example - defining class without specifying a namespace to it
 */
// the following example will print out 'true'.
// Defining a function without any namespace attached to it will gets placed to the global scope.
function Project(){ };
//console.log(window.Project === Project);

// this will print out 'false'. Classes doesn't get placed into the global scope.
class Dog {};
//console.log(window.Dog === Dog);