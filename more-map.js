const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Braty', 'Tom Solaiman'];
const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 25000, color: 'sky blue' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
];
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
products.map(product => console.log(product));
// console.log(productName, productPrice);