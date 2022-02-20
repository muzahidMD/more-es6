const numbers = [4, 6, 8, 10];
// const output = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

const output2 = [];
for (const number of numbers) {
    // const result = number * 2;
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output);


// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares)

// for loop
// for (i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }