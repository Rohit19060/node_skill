// EventEmitter in Node.js
// The EventEmitter class is part of the events module in Node.js.

// Importing EventEmitter:

// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("greet", (name) => {
//     console.log(`Hello, ${name}!`);
// });
// eventEmitter.emit("greet", "Alice");
// Output: Hello, Alice!



const EventEmitter = require("events");

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Listener for 'dataReceived' event
eventEmitter.on("dataReceived", (data) => {
    console.log(`Data received: ${data}`);
});

// Listener for 'error' event
eventEmitter.on("error", (err) => {
    console.error(`Error occurred: ${err.message}`);
});

// Emit events
eventEmitter.emit("dataReceived", "Hello, World!");
eventEmitter.emit("error", new Error("Something went wrong!"));

// You can add multiple listeners for the same event:

eventEmitter.on("greet", (name) => console.log(`Hi, ${name}!`));
eventEmitter.on("greet", (name) => console.log(`How are you, ${name}?`));

eventEmitter.emit("greet", "Bob");
// Output:
// Hi, Bob!
// How are you, Bob?


// Use.off() or.removeListener() to remove specific listeners:

const greetListener = (name) => console.log(`Hi, ${name}!`);

eventEmitter.on("greet", greetListener);
eventEmitter.emit("greet", "Charlie"); // Output: Hi, Charlie!

eventEmitter.off("greet", greetListener); // Remove the listener
eventEmitter.emit("greet", "Charlie"); // No output


eventEmitter.once("connect", () => console.log("Connected!"));

eventEmitter.emit("connect"); // Output: Connected!
eventEmitter.emit("connect"); // No output


try {
    eventEmitter.emit("error", new Error("Critical failure!"));
} catch (error) {
    console.error("Caught an unhandled error:", error.message);
}

// Node.js uses EventEmitter under the hood.For instance, the http module 's server handles events like request and error.

const http = require("http");

const server = http.createServer();

// Listen for 'request' events
server.on("request", (req, res) => {
    console.log(`Received request for ${req.url}`);
    res.end("Hello, World!");
});

// Listen for 'error' events
server.on("error", (err) => {
    console.error("Server error:", err.message);
});

// Start the server
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
