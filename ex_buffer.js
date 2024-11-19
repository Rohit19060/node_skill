const buf = new Buffer.from('hello');
console.log(buf); // <Buffer 68 65 6c 6c 6f>
console.log(buf.toString()); // hello
console.log(buf.toJSON()); // { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }
console.log(buf[2]); // 108
buf.write('wo'); 
console.log(buf.toString()); // wollo

const buf2 = new ArrayBuffer(8);
console.log(buf2); // ArrayBuffer { byteLength: 10 }
const view = new Int32Array(buf2);
view[0] = 5;
view[1] = 15;
view[2] = 25;
console.log(view); 