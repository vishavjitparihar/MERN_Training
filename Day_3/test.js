const goToMovies = async () => {
    try{  //this is .then
        //here await is waiting to get conformation from the function
        const conformationOfDishes = await cleanDishes();
        console.log(conformationOfDishes);

        const conformationOfDog = await walkDog();
        console.log(conformationOfDog);

        console.log('Going to the movies now!')
    } catch (err) { //this is .catch

        console.error(err);
    } finally {
        //this is .finally
    }
}

const walkDog = async () => {
    //forces it to pause here
    //await is making us wait to get resolved promise out
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Walking the dog.')
        },1000)
    })
}

const cleanDishes = async () => {
    //forces it to pause here
    //await is making us wait to get resolved promise out
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Cleaning the dishes')
        },3000)
    })
}


goToMovies();