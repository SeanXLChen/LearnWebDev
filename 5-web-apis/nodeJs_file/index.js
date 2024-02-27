const fs = require('fs'); // fs is a built-in module in Node.js that allows us to work with the file system

fs.readFile('./files/file1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

