// const width1 = +prompt("Please Enter Rectangle Width");
// const height1 = +prompt("Please Enter Rectangle Height");

// console.log(width1 * height1);
// document.write(`Rectangle Area: ${width1 * height1}`);

// 🟡 1. Calculate Square Area

// const side = +prompt("Enter the side of the square:");
// console.log(side * side);
// document.write(`Square Area: ${side * side}`);

// 🔵 2. Find Circle Circumference

// const radius = +prompt("Enter the radius of the circle:");
// const circumference = 2 * Math.PI * radius;
// console.log(circumference.toFixed(2));
// document.write(`Circumference: ${circumference.toFixed(2)}`);

// 🟣 3. Convert Celsius to Fahrenheit

// const celsius = +prompt("Enter temperature in Celsius:");
// const fahrenheit = (celsius * 9) / 5 + 32;
// console.log(fahrenheit);
// document.write(`Temperature in Fahrenheit: ${fahrenheit}`);

// 🔶 4. Calculate Simple Interest

// const principal = +prompt("Enter principal amount:");
// const rate = +prompt("Enter rate of interest:");
// const time = +prompt("Enter time in years:");
// const simpleInterest = (principal * rate * time) / 100;
// console.log(simpleInterest);
// document.write(`Simple Interest: ${simpleInterest}`);

// 🔺 5. Swap Two Numbers

// let a = +prompt("Enter first number (a):");
// let b = +prompt("Enter second number (b):");

// [a, b] = [b, a];

// console.log(`a: ${a}, b: ${b}`);
// document.write(`After Swap -> a: ${a}, b: ${b}`);

// 🔹 6. Calculate Average of 3 Numbers

// const num1 = +prompt("Enter first number:");
// const num2 = +prompt("Enter second number:");
// const num3 = +prompt("Enter third number:");

// const avg = (num1 + num2 + num3) / 3;
// console.log(avg);
// document.write(`Average: ${avg}`);

// 🟤 7. Calculate Perimeter of Rectangle

// const width2 = +prompt("Enter width of rectangle:");
// const height2 = +prompt("Enter height of rectangle:");

// const perimeter = 2 * (width2 + height2);
// console.log(perimeter);
// document.write(`Perimeter: ${perimeter}`);

//todo generate random number b/w 1 to 6;

// const startNo = 1;
// const endNo = 6;

const startNo = +prompt("Enter start no:");
const endNo = +prompt("Enter end no:");
// parseInt();
// Number();

let randomNo = Math.floor(Math.random() * endNo) + startNo;
console.log(`The random number is: ${randomNo}`);
