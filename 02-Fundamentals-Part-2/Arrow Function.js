/*
    Arrow Function Doesn't Support this Keyword.
    This is the main defference between normal function & arrow function.
*/
// Arrow Function with one parameter & only one line of body
/*
Here,
    Function Name: age1
    FunctionParameter: birthYear
    Function Body: 2021 - birthYear
*/
const age1 = birthYear => 2021 - birthYear;
console.log(age1(1997));



// Arrow Function with  one parameter & multiple line body
/*
Here,
    Function Name: yearsUntilRetirement
    FunctionParameter: birthYear
    Function Body:
        const age2 = 2021 - birthYear;
        return retirement = 65 - age2;
*/
const yearsUntilRetirement = birthYear => {
    const age2 = 2021 - birthYear;
    return retirement = 65 - age2;
}
console.log(yearsUntilRetirement(1991));



// Arrow Function with multiple parameter
/*
Here,
    Function Name: retirementWithName
    FunctionParameter: birthYear, firsName
    Function Body:
        const age2 = 2021 - birthYear;
        const retirement = 65 - age2;
        return `${firsName} retires in ${retirement} years.`;
*/
const retirementWithName = (birthYear, firsName) => {
    const age2 = 2021 - birthYear;
    const retirement = 65 - age2;
    return `${firsName} retires in ${retirement} years.`;
}
console.log(retirementWithName(1997, 'Syed Rakesh Uddin'));
console.log(retirementWithName(2004, 'Syed Rahat Uddin'));