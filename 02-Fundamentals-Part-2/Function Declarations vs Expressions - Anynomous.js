// Function Declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}



// Function Expressions / Anynomous Function
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

console.log(calcAge1(1995), calcAge2(1997));



// Function Declaration can be called before the function declarae.
const age1 = calcAge3(2004)
function calcAge3(birthYear) {
    return 2021 - birthYear;
}



// Function Expressions / Anynomous Function ca not be called before the function declared. First declare the function then we can call the function.
const calcAge4 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge4(2000);

console.log(age1, age2);