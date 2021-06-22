const rakeshArray = [
    'Syed',
    'Rakesh',
    2021 - 1997,
    'Software Engineer',
    ['Faira', 'Nishat', 'Khan'],
];

// Backward Looping
for (let arrayIndex = rakeshArray.length - 1; arrayIndex >= 0; arrayIndex--) {
    console.log(rakeshArray[arrayIndex]);
}



// Loops in loop Or Nested Loop
for (let excetcise = 1; excetcise <= 3; excetcise++) {
    for (let repitition = 1; repitition <= 5; repitition++) {
        console.log(`Excercise ${excetcise}: Lifting weight ${repitition}`);
    }
}