const hasDrivingLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

if(hasDrivingLicense && hasGoodVision){
    console.log('Rakesh is able to drive :)');
}else{
    console.log('Someone else should drive :/');
}

if(hasDrivingLicense && hasGoodVision && !isTired){
    console.log('Should Drive :)');
}else{
    console.log(`Shouldn't drive :/`);
}