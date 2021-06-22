// Normal While Loop / While loop with counter
let repetition = 1;
while (repetition <= 10) {
    console.log(`Lifting weights repetition ${repetition}`);
    repetition++;
}



// While without counter / Conditionaly True & Repeat
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) { // If the first dice is 6 then while doesn't enter to body of the loop. So nothing will log to console.
    console.log(`You rolled a ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log('Loop is about to end.');
}