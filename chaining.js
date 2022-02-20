//declear variable basesd on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log(x, b);

// distructuring array 
const [p, q] = [45, 37, 64, 86];
// console.log(p, q);

const company = {
    name: 'Gp',
    ceo: { id: 1, name: 'ajmol', food: 'fushka' },
    web: {
        Work: 'website developmwnt',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}

console.log(company?.web?.framework)
console.log(company?.backend?.tech?.third)