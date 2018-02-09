const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Michael',
    //   age: 24
    // });
    reject('Something went wrong!');
  }, 4000);
});

console.log('before');

promise.then((data) => {
  console.log('data', data);
}).then(() => {
  console.log('does this run?');
}).catch((error) => {
  console.log('error', error);
});

console.log('after');
