const text = 'Hello, World!';

// Encode to Base64
const encoded = Buffer.from(text).toString('base64');
console.log(encoded); // Output: SGVsbG8sIFdvcmxkIQ==

// Decode from Base64
const decoded = Buffer.from(encoded, 'base64').toString('utf8');
console.log(decoded); // Output: Hello, World!
