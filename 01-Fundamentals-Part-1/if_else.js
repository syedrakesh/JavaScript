const ageSyed = 15;

if(ageSyed>=18){
    console.log('Syed Rakesh has driving license.');
}else{
   const yearLeft = 18 - ageSyed;
   console.log(`Syed Rakesh Uddin is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 1997;
let century;

if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);