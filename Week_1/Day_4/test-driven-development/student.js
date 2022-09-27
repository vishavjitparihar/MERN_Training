/**
 * Student should have a name
 * Student should have a grade 
 * Student should have a major
 * Student should have an array of classes they are taking
 * 
 * I want the ability to sort students by grade and major and name
 */


class Student{

    #name;
    #grade;
    #major;
    #classes;

    withdrawFromClass(className) {
        //filter out all classes that matches className
        this.#classes = this.#classes.filter(classs => classs !== className);
    }
    // we will be destructring inside the constructor
    // we will be doing that so that we can access each property of the class easily
    constructor({name, grade, major = 'Undecided', classes = []}) {

        this.name = name;
        this.grade = grade;
        this.major = major;
        this.classes = classes;
    }


    get name() {
        return this.#name;
    }

    get grade() {
        return this.#grade;
    }

    get major() {
        return this.#major;
    }

    get classes() {
        return this.#classes;
    }

    set name(name){
        this.#name = name;
    }

    set grade(grade) {
        this.#grade = grade;
    }

    set major(major) {
        this.#major = major;
    }

    set classes(classes) {
        if(!Array.isArray(classes)){
            throw new Error ('classes must be defined as an array');
        }
        this.#classes = classes;
    }
}


//by deafult every variable is self contained inside its respective file
//to share with other files, we must export it

//add to the exports onject for this file
//export the entire student class
module.exports = Student;