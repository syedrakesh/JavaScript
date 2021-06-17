const fullName = [1, 'Syed', 'Rakesh', 'Uddin'];

// Add elements to end of the array
let newLength = fullName.push('Joy');
console.log(fullName);
console.log(newLength);

// Add elements to start of the array
newLength = fullName.unshift('Mr');
console.log(fullName);
console.log(newLength);



// Remove the last element of the Array
fullName.pop();
let popped = fullName.pop();
console.log(popped);
console.log(fullName);

// Remove the first element of the Array
popped = fullName.shift();
console.log(popped);
console.log(fullName);

// Index of array elements
console.log(fullName.indexOf('Rakesh'));
console.log(fullName.indexOf('Kamal'));



// Array elements exist or not & it follow strict equality '==='
console.log(fullName.includes('Rakesh'));
console.log(fullName.includes('Kamal'));
console.log(fullName.includes('1'));
console.log(fullName.includes(1));



// Conditional Check with array includes function
if (fullName.includes('Syed')) {
    console.log(`Syed exits in the array.`);
}