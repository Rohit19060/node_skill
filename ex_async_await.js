function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched!"), 2000);
    });
}

fetchData().then((result) => {
    console.log(result); // Output after 2 seconds: "Data fetched!"
});

async function getData() {
    const result = await fetchData();
    console.log(result); // Output after 2 seconds: "Data fetched!"
}

getData();


async function fetchWithError() {
    throw new Error("Something went wrong!");
}

async function getData() {
    try {
        const data = await fetchWithError();
        console.log(data);
    } catch (error) {
        console.error(error.message); // Output: "Something went wrong!"
    }
}

getData();


async function fetchUser() {
    try {
        const response = await fetch("https://api.example.com/user");
        const data = await response.json();
        console.log(data); // Logs the fetched user data
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

fetchUser();


// async always returns a Promise.Even if you return a value directly, it will be wrapped in a resolved Promise.

async function example() {
    return "Hello";
}
example().then(console.log); // Output: "Hello"
// await is blocking only inside the async function. It does not block the overall execution of the script.

// By combining async and await, asynchronous code becomes much more manageable and expressive.