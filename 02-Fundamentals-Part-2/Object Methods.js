const rakesh = {
    firstName: 'Syed',
    lastName: 'Rakesh',
    birthYear: 1997,
    job: 'Software Engineer',
    friends: ['Faria', 'Nishat', 'Khan'],
    calcAge: function (birthYear) {
        return 2021 - birthYear;
    }
}

console.log(rakesh.calcAge(1995)); // Using manual argument

console.log(rakesh.calcAge(rakesh.birthYear)); // Use object (Dot Notaion) as argument of function

console.log(rakesh['calcAge'](1995)); // Using Bracket Notaion & manual argument

console.log(rakesh['calcAge'](rakesh.birthYear)); // Using Bracket Notaion & Dot Notation



const syed = {
    birthYear: 2010,

    functionForThis: function () {
        console.log(this); // This will return the full object properties.
    },

    /*
        Using this get access to current objects property. If we call this object method multiple time then it will come slow in the output. Because it run the function multiple time & then return result.
    */
    calcAgeNormalWay: function () {
        return 2021 - this.birthYear;
    },

    /*
        Using this create a new property age then store the value. and return it. so when we call age propert it will simply return the result. no need to calculate result multiple times.
    */
    calcAgeBestWay: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    }
}

// syed.functionForThis(); // This function holds current objects whole values.

// console.log(syed.calcAgeNormalWay()); // Normal ways ouput.
// console.log(syed.calcAgeNormalWay()); // Normal ways ouput.

console.log(syed.calcAgeBestWay()); // Called the method once.

console.log(syed.age); // Best ways ouput. but for this trick we need to first call the method previously. Then this 'age' property will be work properly.



// Challenge
// Rahat is a 46 years old teacher, and he has a driver's license.

const rahat = {
    firstName: 'Rahat',
    birthYear: 2004,
    job: 'teacher',
    hasDriversLicense: false,

    calcAge: function () {
        return this.age = 2021 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${rahat.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};
console.log(rahat.getSummary());