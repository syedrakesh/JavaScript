// Type Conversion
const inputYear = '1997';
console.log(Number(inputYear), typeof inputYear);
console.log(Number(inputYear) + 24);

console.log(Number('Syed'));
console.log(typeof NaN);

let numberToString = 23;
console.log(typeof numberToString);
numberToString = String(23);
console.log(typeof numberToString);





// Type Coercion

// + operator will concatinate all character & convert all character to string.
console.log('I am ' + 23 + ' years old.');
console.log('10'+'5');
// But - * / > < operator convert all string to number if it is possible.

console.log('23'-2);
console.log(typeof('23'-2));

console.log('23'-'2');
console.log(typeof('23'-'2'));

console.log('23'*'2');
console.log(typeof('23'*'2'));

console.log('23'/'2');
console.log(typeof('23'/'2'));

console.log('23'>'2');
console.log(typeof('23'>'2'));

let number = '1' + 1;
number = number - 1;
console.log(number);

console.log(2+3+4+'5');
console.log('10'-'4'-'3'-2+'5');