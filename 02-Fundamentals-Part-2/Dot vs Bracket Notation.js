const rakesh = {
    firstName: 'Syed',
    lastName: 'Rakesh',
    age: 2021 - 1997,
    job: 'Software Engineer',
    friends: ['Faria', 'Nishat', 'Khan'],
}
console.log(rakesh);

console.log(rakesh.firstName); // Dot Notation
console.log(rakesh['firstName']); // Bracket Notationdob

const nameKey = 'Name';
console.log(rakesh['first' + nameKey]); // Expression support in bracket notation
console.log(rakesh['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Rakesh? Choose between firstName, lastName, dob, age, friends');

console.log(rakesh.interestedIn); // Unsupported. Because Dot notation doesn't support expression.
console.log(rakesh[interestedIn]); // Supported. Because Bracker notation support expression.

if(rakesh[interestedIn]){
    console.log(rakesh[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, dob, age, friends');
}

rakesh.location = 'Bangladesh';
rakesh['twitter']= '@syedrakesh_me';

console.log(rakesh);



// Challenge request
// Syed has 3 friends, and his best friend is called Faria
console.log(`${rakesh.firstName} has ${rakesh.friends.length} friends, and his best friend is called ${rakesh.friends[0]}`);