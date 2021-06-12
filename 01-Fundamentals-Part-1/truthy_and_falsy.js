// 6 Falsy Values are : 0, '', undefined, null, NaN, false

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean({}));
console.log(Boolean(true));
console.log(Boolean(2));
console.log(Boolean('Syed'));

const money = 0;
if(money){
    console.log("Don't spend all the money.");
}else{
    console.log("You should get a job!");
}

let height;
if(height){
    console.log('Height is Defined.');
}else{
    console.log('Height is Undefined.');
}

let width = 0;
if(width){
    console.log('Height is Defined.');
}else{
    console.log('Width is Undefined.');
}