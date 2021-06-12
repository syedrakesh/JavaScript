const currentYear = 2021;
// Arithmatic Operator
const ageRakesh = currentYear - 1997;
const ageRahat = currentYear - 2004;

console.log(ageRakesh, ageRahat);

// Arithmatic Operator
console.log(2 * 3, 15 / 3, 2 ** 3);

// Assignment Operator
const firstName = "Syed";
const middleName = "Rakesh";
const lastName = "Uddin";

console.log(firstName + " " + middleName + " " + lastName);

// Assignment Operator
let number = 20 - 5; // 15
number += 7; // number = 15 + 7 = 22
number -= 2; // number = 22 - 2 = 20
number *= 5; // number = 20 * 5 = 100
number /= 2; // number = 100 / 2 = 100
number++; // number = 50 + 1 = 51
number--; // number = 51 - 1 = 50
number--; // number = 50 - 1 = 49

console.log(number);

// Comparison Operator
console.log(ageRakesh > ageRahat);
console.log(currentYear - 1997 > currentYear - 2004);

console.log(ageRahat < ageRakesh);
console.log(currentYear - 2004 < currentYear - 1997);

console.log(ageRakesh == 24);

console.log(ageRahat >= 16);

// Operator precedence
console.log(ageRakesh + ageRahat / 2); // 24+17/2 = 32
console.log((ageRakesh + ageRahat) / 2); // (24+17)/2 = 20
