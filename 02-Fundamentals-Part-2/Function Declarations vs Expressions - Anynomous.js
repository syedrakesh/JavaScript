// Function Declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}



// Function Expressions / Anynomous Function
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

console.log(calcAge1(1995), calcAge2(1997));