//in this case 'this' is calling the global Object

function myFunction() {
    this.firstName = 'Gary';
    console.log(this);
}

myFunction(); //this refers to the global context

const obj = {
    firstName: 'Jhon',
    someFunction: myFunction
}

obj.someFunction(); //this refers to the property someFunction of the object obj


new myFunction(); //creates a new object, and now 'this' is refreing to this new object