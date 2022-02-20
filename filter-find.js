const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
const mediumNumbers = numbers.filter(number => number > 10 && number < 20);
// console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'mobile phone', price: 25000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
];
const expensive = products.filter(product => product.price > 1500);
// console.log(expensive);
const blackProduct = products.filter(product => product.color == 'pink');
// console.log(blackProduct);
const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem);