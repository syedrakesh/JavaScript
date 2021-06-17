// Function 1
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

// Function 2
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return console.log(`${firstName} retires in ${retirement} years.`);
        //return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        //return -1;
    }
}

// console.log(yearsUntilRetirement(1964, 'Mazbah'));
yearsUntilRetirement(1995, 'Joy');