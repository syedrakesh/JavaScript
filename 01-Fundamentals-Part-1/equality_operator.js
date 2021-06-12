const number = 1;
if(number === 1) console.log('Strictly Controled using triple equale.');
if(number == 1) console.log('Loosely Controled using double equale.');

if(number !== 2) console.log('Strictly Controled using double equale.');
if(number != 2) console.log('Loosely Controled using one equale.');

const favoriteNumber = Number(prompt("Choose a number between 1 to 3"));

if(favoriteNumber === 1){
    console.log('Number is 1');
}else if(favoriteNumber === 2){
    console.log('Number is 2');
}else if(favoriteNumber === 3){
    console.log('Number is 3');
}else{
    console.log('Not not between 1 to 3.');
}