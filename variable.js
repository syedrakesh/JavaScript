/*
Camelcase is mostly used for JavaScript. It is a convention.
Ex: camelCase

We can not use reserved keyword for naming variable.

Although 'name' is a keyword but we can use it in variable. But good practice is do not use 'name' in variable. Rather than we can use firstName or first_name. Or something meaningful.

Starting variable name with uppercase is not good. It is not convention. Though, it is just convention do not use first letter of the variable uppercase. Breaking the convention is not good practice of coding.

variableName1, variableName2, variableName3 this is bad practice for naming variable.

Eternal truth variable name will UPPERCASE like this.
Ex: PI

Variable name can not start with number or any character. But 
underscore _
dollar $
sign is acceptable.
*/

let firstName = 'Syed'; // Camelcase

console.log(firstName);
console.log(firstName);
console.log(firstName); // Can console a variable as many time we want. change the value of variable will effect on all of the script. This is why variable is used.

let PI = 3.1416; // Uppercase. It is use for special variable. which is Eternal truth or specific.
let last_name = 'Uddin'; // This is also a way of variable declaration.
let $function = 'My Function Name'; // Dollar character can be used in the beginning of variable name. Exception.
let _function = 'My Function Name'; // Underscore character can be used in the beginning of variable name. Exception.

console.log(PI);
console.log(last_name);
console.log($function);
console.log(_function);

let Job1 = 'Laravel Developer'; // First letter is uppercase & variable name is not descriptive.
let job2 = 'Javascript Developer'; // Variable name is not descriptive.

console.log(Job1);
console.log(job2);

let myFirstJob = 'Laravel Developer'; // Good Practice. Descriptive.
let myCurrentJob = 'Javascript Developer'; // Good Practice. Descriptive.

console.log(myFirstJob);
console.log(myCurrentJob);