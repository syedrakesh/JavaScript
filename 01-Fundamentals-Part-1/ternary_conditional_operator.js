const age = 23;

// Normal Ternary Condition
age >= 18 ? console.log("I Like to Drink Wine") : console.log("I Like to Drink Water");
// Inside Template Literal we can not use if else but we can use ternary operator.
// This code will generate same result like previous syntax with optimization.
// And less code then previous code.
console.log(`I Like to Drink ${age >= 18 ? "Wine" : "Water"}`);

// Same Expression With Ternary
// No variable repeatation for assigning value on ternary operator.
const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);


// Same Expression Without Ternary
// Variable repeatation.
let drink2; // Declaration of drink2 variable
if (age >= 18) {
	drink2 = "Wine"; // Repeatation of drink2 variable with if else
} else {
	drink2 = "Water"; // Repeatation of drink2 variable with if else
}
console.log(drink2);