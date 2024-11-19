const fs = require('fs');

const test = fs.readFileSync(__dirname + '/txt.txt', 'utf8');

console.log(test);

fs.readFile(__dirname + '/txt.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

console.log('Reading file...');


const fs = require('fs');

// Write to a file
fs.writeFileSync('example.txt', 'Hello, World!');

// Read from a file
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data); // Output: Hello, World!
