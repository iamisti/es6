/**
 * Using super is perfectly okay for objects as well. You just need to make sure that prototype is gets set up right.
 */

let project = {
    getTaskCount(){
        return 50;
    }
};

let softwareProject = {
    getTaskCount(){
        return super.getTaskCount() + 7;
    }
};

Object.setPrototypeOf(softwareProject, project);

//this will print out 57.
console.log(softwareProject.getTaskCount());