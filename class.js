class Support {
    name;
    designation = 'Support Web Developer';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session')
    }
}
const aamir = new Support('Aamir Khan', 'Bd');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'India');
salman.startSession();
aamir.startSession();
sharuk.startSession();


// console.log(aamir, salman, sharuk);

