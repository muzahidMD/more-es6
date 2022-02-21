const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '017505454545', address: 'Chadpur', dress: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;
const { phone, price, dress, id } = fish;


// console.log(phone, price, dress, id);
// console.log(phone, dress);
// console.log(phone, id);
// console.log(phone, price);
// console.log(phone, id);
// console.log(phone, dress);

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

// const work = company.web.Work;
// const framework = company.web.framework;
const tech = company.web.tech.first;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;

// console.log(company.web.framework)
// console.log(company.backend.tech.third)