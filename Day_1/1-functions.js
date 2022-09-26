//Method overloading is not a thing in Java Script

//function declaration
function myFunction(){
    console.log('myFunction');
}

//invoking the fuction
myFunction();

function greet(firstName, lastName){
    //Template Literal
    console.log(`Hello, ${firstName} ${lastName}`);

    //string concetination
    console.log('Hello, ' + firstName + ' ' + lastName);

    //python method
    console.log('Hello,', firstName, lastName);
}

greet('Vishu', 'Parihar');
greet('Vishu');
greet();
greet('Vishu', 'Parihar', 'something else');
greet(1, 2);

//parameters will receive their default value when undefined is passedd in it's place
function defaultParams(a='a', b='b', c=a){
    console.log(a,b,c);
}

defaultParams(1,2,3);
defaultParams('x', 'y');
defaultParams();
defaultParams('a', undefined, 'z');