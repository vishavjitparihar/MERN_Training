/**
 * 
 * Higher Order Functions
 * 
 * forEach
 * map
 * filter
 * reduce
 * 
 * 
 * 
 * find detailed information on Week_1>>Day_2>>7-array-HOFs.js
 */



//looking for the max value in this array
const numbers = [-56, -1, -32];

const max = numbers.reduce(function(currMax, num){
    return currMax >= num ? currMax : num;
}, 0)
//adding 0 or any number will set the currMax to that number at the begining of the loop


console.log(max);
//----------------------------------------------------------------------------------------------------------------------------





//costructor function

function rectangle(length, width, col = 'Red') {
    let color = col;
    this.width = width;
    this.length = length;

    //getters and setters in functions
    Object.defineProperties(this, {
        'color': {
            get: function(){
                return color;
            },
            set: function(col){
                color = col;
            }
        }
    })
}

const rect = new rectangle(50, 100);
console.log(rect);

console.log(rect.color);
console.log(rect.color = 'Blue');
console.log(rect.color);

//adding some properties to the rectangle function
rectangle.prototype.calcArea = function() {
    return this.length * this.width;
}

rectangle.prototype.calcParameter = function() {
    return (2*(this.length+this.width))
}

//using these new properties
console.log(rect.calcArea());
console.log(rect.calcParameter());
//----------------------------------------------------------------------------------------------------------------------------





class Square {
    
    side;

    constructor(side){
        this.side = side;
    }

    calcParameter(){
        return 4*this.side;
    }

    //static functions in a class
    static hello(){
        console.log('something');
    }
}

Square.prototype.calcArea = function(){
    return this.side*this.side;
}
const mySqr = new Square();
Square.hello();
//----------------------------------------------------------------------------------------------------------------------------






