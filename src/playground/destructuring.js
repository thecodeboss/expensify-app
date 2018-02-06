//
// Object Destructuring
//

// const person = {
//   age: 24,
//   location: {
//     city: 'San Francisco',
//     temp: 14
//   }
// };

// const {name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


//
// Array Destructuring
//

const address = ['123 Hello St', 'San Francisco', 'California', '94103'];

const [, city, state = 'New York'] = address;
console.log(`I am in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , price] = item;
console.log(`A medium ${itemName} costs ${price}.`);
