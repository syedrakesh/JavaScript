'use strict';



// Not all functions needs to return something.
// Not all functions needs parameter.



// Normal Function without parameter
function logger() {
    console.log('My name is Joy.'); // This function doesn't return anything. It just log what we logged here.
}
logger(); // Calling / Running/ Invoking Function.
logger(23); // The parameter '23' is useless. because logger function has no parameter. So 23 is not gonna use when we call the function.



// Function with parameters.
function fruitProccessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProccessor(5, 3); // Print only the parameters not the string inside juice.

const appleJuice = fruitProccessor(5, 0); // Store the whole function inside this variable.
console.log(appleJuice); // Print the full function using variable. log the parameters & log the juice variable.

console.log(fruitProccessor(5, 0)); // Print the full function directly.



const number = Number('23');
console.log(number);