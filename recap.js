// 01. let and const 
const hubby = 'Omor Sani';
let phone = 'iPhone 16';
phone = 'Samsung Galaxy 15';
//02. default parameter
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);
// 03. tempalte String
const myNotes = `I am majnu of ${hubby}. I have a mobile phone name is ${phone}.`
// console.log(myNotes);

//5.sprade or three dots