// const willGetYouDog = new Promise((resolve) => {
//     // resolve('Dog');
//     resolve('No dog');
// });
// const willGetYouCat = new Promise((resolve, _reject) => {
//     // setTimeout(() => {
//     //     resolve('Cat');
//     // }, 2000);
//     // reject();
//     resolve('Cat');
// });
// Promise.all([willGetYouDog, willGetYouCat]).then((values) => {
//     console.log(values);
// }).catch(() => {
//     console.log('No dog or cat');
// });

// willGetYouDog.then((value) => {
//     console.log(value);
// });
// willGetYouCat.then((value) => {
//     console.log(value);
// }).catch(() => {
//     console.log('No cat');
// })

const willPromise = new Promise((resolve, reject) => {
    const rand = Math.random();
    console.log(rand);
    setTimeout(() => {
        if (rand > 0.5) {
            resolve('Dog');
        } else {
            reject('No dog');
        }
    }, 2000);
});

willPromise.then((y) => {
    console.log(y);
}).catch((x) => {
    console.log(x);
});


const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        console.log(rand);
        setTimeout(() => {
            if (rand > 0.5) {
                resolve('Dog');
            } else {
                reject('No dog');
            }
        }, 2000);
    });
};

makeDogPromise().then((y) => {
    console.log(y);
}).catch((x) => {
    console.log(x);
});

fetch('https://reqres.in/api/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(...data.data);
    })
    .catch((err) => {
        console.log(err);
    });

const promise = new Promise((resolve, reject) => {
    // Simulate an async operation
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Operation succeeded!"); // Fulfilled
        } else {
            reject("Operation failed!"); // Rejected
        }
    }, 2000);
});


promise
    .then((result) => {
        console.log(result); // Output: "Operation succeeded!" (if resolved)
    })
    .catch((error) => {
        console.error(error); // Output: "Operation failed!" (if rejected)
    });


promise
    .finally(() => {
        console.log("Operation complete, regardless of success or failure.");
    });


const fetchData = new Promise((resolve) => setTimeout(() => resolve("Data fetched"), 1000));

fetchData
    .then((data) => {
        console.log(data); // Output: "Data fetched"
        return "Processing data";
    })
    .then((processedData) => {
        console.log(processedData); // Output: "Processing data"
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Promise.resolve(value): Creates a promise that is already resolved with the given value.
Promise.resolve("Success").then(console.log); // Output: "Success"

// Promise.reject(reason): Creates a promise that is already rejected with the given reason.
Promise.reject("Error").catch(console.error); // Output: "Error"

// Promise.all(promises): Resolves when all promises are resolved or rejects if any promise is rejected.
const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
    .then(console.log) // Output: ["First", "Second", "Third"]
    .catch(console.error);
// asyncOperation1((result1) => {
//     asyncOperation2(result1, (result2) => {
//         asyncOperation3(result2, (result3) => {
//             console.log(result3);
//         });
//     });
// });
// asyncOperation1()
//   .then((result1) => asyncOperation2(result1))
//     .then((result2) => asyncOperation3(result2))
//     .then((result3) => console.log(result3))
//     .catch((error) => console.error(error));


fetch("https://api.example.com/data")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON
    })
    .then((data) => {
        console.log(data); // Handle the fetched data
    })
    .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
    });
