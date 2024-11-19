// var fs = require('fs');

// var readable = fs.createReadStream('txt.txt', { encoding: 'utf-8', highWaterMark: 32 * 1024 });

// var writable = fs.createWriteStream('out2.txt');

// readable.on('data', function (data) {
//     console.log(data.length);
//     writable.write(data);
// });

// readable.on('end', function () {
//     console.log('Done!');
// });



var fs = require('fs');

var readable = fs.createReadStream('txt.txt');

var writable = fs.createWriteStream('out2.txt');


readable.pipe(writable);