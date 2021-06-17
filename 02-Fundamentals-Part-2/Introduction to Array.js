// Declare or define array
const years = new Array(1995, 1997, 1998, 2000, 2004);
console.log(years);

// Usual or More common way to define array using square bracket.
const friends = ['Syed Rakesh', 'Faria Nishat'];
console.log(friends);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[0] = 'Syed Rakesh Uddin'; // We declare friends array as const but still we can change its value because array is not primitive type data. primitive type data cannot change if it is declared as const.
friends[1] = 'Faria Nishat Khan';
console.log(friends);

// friends = ['Rahat', 'Uddin']; But it is not possible to change whole array variable if declared as const.

const firstName = 'Syed';
const joyInformation = [firstName, 'Rahat', 2021 - 1997, friends,]; // Array store diffrent data types.
console.log(joyInformation);



const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const birthYear = [1964, 1995, 1997, 1998, 2000, 2004];

const age1 = calcAge(birthYear[0]);
const age2 = calcAge(birthYear[1]);
const age3 = calcAge(birthYear[2]);
const age4 = calcAge(birthYear[birthYear.length - 1]);

console.log(age1, age2, age3, age4);

const ages = [calcAge(birthYear[0]), calcAge(birthYear[1]), calcAge(birthYear[2]), calcAge(birthYear[birthYear.length - 1])]

console.log(ages);