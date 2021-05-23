
const fizzBuzz = (number) => {

    // todo número divisible entre 3 y 5 fizzBuzz
    if (number % 15 === 0) {
        return 'fizzBuzz'
    }
    
    // todo número divisible entre 5 buzz
    if (number % 5 === 0) { 
        return 'buzz'
    }
    
    // todo número divisible entre 3 fizz
    if (number % 3 === 0) { 
        return 'fizz'
    } 

    return number
}

module.exports = {
    fizzBuzz
}