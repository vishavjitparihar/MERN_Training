//classses in JS are simply "syntactic sugar" for constructor functions
//"syntactic sugar" means it accomplishes the same thing functionally, it is just easier to write and read
//class Bird{ } and function Bird() { } will work the same


class Bird {
    //define variables here
    // adding # will make variable private
    #color;     
    wingSpan;
    static feet = 2; //can be shared by all Bird object

    constructor(color, wingSpan) {
        this.#color = color;
        this.wingSpan = wingSpan;
    }

    //i can access the private varibale in getter setter as it is a part of the class Bird

    //getter function
    //whenever i say bird.color - it will call this function 
    get color(){
        return this.#color;
    }

    //setter function
    //whenever i say bird.color = 'something' - it will call this function
    set color(color) {
        this.#color = color;
    }

    //private helper method
    #calculateHexCode() {
        if(this.#color === 'red'){
            return 'FF0000';
        }
    }

    //static method or variable can be accessed and shared between all Bird objects
    static hello() {
        console.log('Hey!');
    }
    
}

const bird = new Bird('Blue', 7);
console.log(bird);

console.log(bird.color);

bird.color = 'green';
console.log(bird.color);

console.log(Bird.feet);  //static method or variable must be accessed by the class itself




//?????????????????????????????????????????????????????????????????????????????????????????????????
//it should print hey!
Bird.hello(); //it doesnt work - need to ask Sean






// //creating another class that will extends from Birds
// class Raven extends Bird {

// }

// const raven = new Raven();



// //another method of creating class
// //this is creating a new object called crow, which is linked to {}
// //and {} is linked to global Object
// const crow = Object.create({});
