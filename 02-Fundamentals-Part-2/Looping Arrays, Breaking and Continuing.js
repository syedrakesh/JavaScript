const rakeshArray = [
    'Syed',
    'Rakesh',
    2021 - 1997,
    'Software Engineer',
    ['Faira', 'Nishat', 'Khan'],
    true
];

arrayTypes = [];

// Looping Arrays
for (let arrayCounter = 0; arrayCounter < rakeshArray.length; arrayCounter++) {
    // Reading from rakeshArray
    //console.log(rakeshArray[arrayCounter], typeof rakeshArray[arrayCounter]);

    // Filling Types Array
    //arrayTypes[arrayCounter] = typeof rakeshArray[arrayCounter];
    arrayTypes.push(typeof rakeshArray[arrayCounter]);
    console.log(arrayTypes[arrayCounter]);
}



const birthYears = [1964, 1970, 1997, 1999, 2004];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
    ages.push(2021 - birthYears[i]);
}

console.log(ages);



// Continue
console.log('Continue');
for (let arrayCounter = 0; arrayCounter < rakeshArray.length; arrayCounter++) {
    if (typeof rakeshArray[arrayCounter] !== 'string') continue;
    console.log(rakeshArray[arrayCounter], typeof rakeshArray[arrayCounter]);
}



// Break
console.log('Break');
for (let arrayCounter = 0; arrayCounter < rakeshArray.length; arrayCounter++) {
    if (typeof rakeshArray[arrayCounter] === 'number') break;
    console.log(rakeshArray[arrayCounter], typeof rakeshArray[arrayCounter]);
}