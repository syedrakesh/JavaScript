/*
Values and Variables
--------------------
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
*/
let country = 'Bangladesh';
let continent = 'Asia';
let population = 163;

console.log(country);
console.log(continent);
console.log(population);



/*
Data Types
----------
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/
const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



/*
let, const and var
------------------
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

language = 'Bengali';
population = 164;



/*
Basic Operator
--------------
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/
population = 164/2;
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);



/*
Strings and Template Literals
-----------------------------
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax
*/
const description1 =   `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);