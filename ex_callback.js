function greet(callback) {
    console.log('Hello');
    const data = { name: 'Rohit Jain' };
    callback(data);
}

greet(function (x) {
    console.log(x);
    console.log('The callback was invoked!');
});

greet(function (data) {
    console.log("Callback 2  was invoked!");
    console.log(data.name);
});