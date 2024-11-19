const multiply = (a, b) => a * b;
const square = (x) => multiply(x, x);
const isRightAngle = (a, b, c) => {
    return square(a) + square(b) === square(c);
};

console.log(isRightAngle(3, 4, 5));