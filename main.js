class Pessoa {
    constructor(name, age, developerLanguage) {
        this.name = name;
        this.age = age;
        this.developerLanguage = developerLanguage;
    }

    apresenta() {
        console.log(`Meu nome é ${this.name} e tenha ${this.age} anos, amo programar em ${this.developerLanguage}`)
    }
}

class DevfrontEndJr extends Pessoa {
    constructor(name, age, developerLanguage) {
        super(name, age, developerLanguage);
    }
}

class DevfrontEndSr extends Pessoa {
    constructor(name, age, developerLanguage) {
        super(name, age, developerLanguage);
    }
}
// instâncias class DevfrontEndJr//

const dev1 = new DevfrontEndJr('Anderson', 33, 'javascript');
const dev2 = new DevfrontEndJr('Gleiciane', 31, 'Python');
const dev3 = new DevfrontEndJr('Carlos', 32, 'Protheus');

console.log(dev1.apresenta());
console.log(dev2.apresenta());
console.log(dev3.apresenta());

// instâncias class DevfrontEndSr//

const devSr1 = new DevfrontEndSr('Anderson', 33, 'Java');
const devSr2 = new DevfrontEndSr('Gleiciane', 31, 'C#');
const devSr3 = new DevfrontEndSr('Carlos', 32, 'PHP');


console.log(devSr1.apresenta());
console.log(devSr2.apresenta());
console.log(devSr3.apresenta());