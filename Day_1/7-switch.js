function calculateNumberInSpanish(number){


    switch(number){
        case 1:
        case 'one':
            console.log("Uno");
            break;
        case 2:
        case 'two':
            console.log("Dos");
            break;
        case 3:
        case 'three':
            console.log("Tres");
            break;
        default:
            console.log('we do not support that number');
    }
}

calculateNumberInSpanish(2);