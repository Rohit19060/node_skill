try {
    // Code that may throw an error
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    // Handles the error
    console.error("An error occurred:", error.message);
}

// You can manually throw an error using the throw statement.
function checkNumber(num) {
    if (num < 0) {
        throw new Error("Number must be non-negative");
    }
    return Math.sqrt(num);
}

try {
    console.log(checkNumber(-1));
} catch (error) {
    console.error("Caught an error:", error.message);
}


try {
    console.log("Trying something risky...");
    throw new Error("Something went wrong!");
} catch (error) {
    console.error("Caught an error:", error.message);
} finally {
    console.log("This always runs, whether there was an error or not.");
}


// JavaScript provides built -in error types for different situations:

// Error: General purpose errors.
// ReferenceError: Occurs when referencing an undefined variable.
// TypeError: Occurs when a variable is not of the expected type.
// SyntaxError: Occurs when there’s an error in syntax.
// RangeError: Occurs when a value is out of range.
// EvalError: Related to the eval() function.

try {
    null.someMethod(); // TypeError
} catch (error) {
    console.log("Name:", error.name); // Output: TypeError
    console.log("Message:", error.message); // Output: someMethod is not a function
}



fetch("https://invalid.url")
    .then((response) => response.json())
    .catch((error) => {
        console.error("Error fetching data:", error.message);
    });


async function fetchData() {
    try {
        const response = await fetch("https://invalid.url");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchData();


class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("This is a custom error!");
} catch (error) {
    console.error(error.name); // Output: CustomError
    console.error(error.message); // Output: This is a custom error!
}

// Best Practices

// Handle Errors Gracefully: Always use try-catch for critical operations like API calls or file reads.

// try {
//     performRiskyOperation();
// } catch (error) {
//     console.error("Error handled gracefully:", error.message);
// }
// Avoid Catch - All Blocks: Don't overuse catch blocks; let errors propagate unless you can handle them properly.

// Provide Meaningful Error Messages: Include clear and actionable error messages.

// Fallback Mechanisms: Use fallback options when a critical operation fails.

// try {
//     let data = fetchData();
// } catch (error) {
//     data = getDefaultData(); // Use default data as a fallback
// }
// Log Errors for Debugging: Use logging tools or error tracking systems like Sentry or LogRocket in production to monitor and debug errors.

// By using JavaScript's robust error-handling features effectively, you can build more resilient and user-friendly applications.