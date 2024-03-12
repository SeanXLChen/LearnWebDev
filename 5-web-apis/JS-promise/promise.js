// create a promise
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

// consume the promise, from our promise, we will receive either 'Success' or 'Failed'
p.then((message) => {
    console.log('This is in the then ' + message); // This is in the then Success
}).catch((message) => {
    console.log('This is in the catch ' + message); // This is in the catch Failed
});