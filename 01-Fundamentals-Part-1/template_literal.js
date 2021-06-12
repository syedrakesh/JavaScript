const firstName = "Syed";
const job = "Learner";
const birthYear = 1997;
const currentYear = 2021;

// Normal way to log
const syed = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old "+ job + "!";
console.log(syed);
console.log('\n\
Multi\n\
Line\n\
String');

// Template Literal - ES6 - Advanced way to log with backticks
const syedNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(syedNew);

console.log(`Just a Regular String...`);
console.log(`
Multi
Line
String
`);