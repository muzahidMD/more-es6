class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Developer';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session')
    }
}
class StudentCare extends TeamMember {
    designation = 'Care Web Developer';
    bulidARotine(student) {
        console.log(this.name, 'Build a routine for', student)
    }
}
class NaptuneDev extends TeamMember {
    codeEditor;
    designation = 'Naptune App Developer';
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    relaseApp(version) {
        console.log(this.name, 'Build a routine for', version)
    }
}
const aamir = new Support('Aamir Khan', 'Bd', 11);
const salman = new Support('Solaiman Khan', 'Dubai', 4);
const sharuk = new Support('SRK Khan', 'India', 9);
const akshay = new Support('Akshay kumar', 'UAE', 11);

const alia = new StudentCare('Alia Bhatt', 'Mumbai')
const ash = new NaptuneDev('Ash', 'Dhaka', 'Vs code');
console.log(alia);
console.log(ash);