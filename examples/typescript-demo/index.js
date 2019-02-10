var Gender;
(function (Gender) {
    Gender["male"] = "1";
    Gender["female"] = "2";
})(Gender || (Gender = {}));
class Person {
    constructor() {
        this.age = 42;
        this.gender = Gender.male;
    }
    walk() {
        console.log("walking");
    }
    talk(word = "Umm", female) {
        console.log(`${female ? 'Woman' : 'Man'} says ${word}`);
    }
    // custom getter
    getFirstName() {
        return this.firstName;
    }
    // custom setter
    setFirstName(firstName) {
        if (!firstName) {
            console.error("Missing First Name");
            return;
        }
        this.firstName = firstName;
    }
    // native getter
    get _firstName() {
        return this.firstName;
    }
    // native setter
    set _firstName(firstName) {
        if (!firstName) {
            console.error("Missing First Name");
        }
        this.firstName = firstName;
    }
}
// let person: Person = new Person();
// person.walk();
// console.log(person.age);
// person.talk("Hello, how are you?", true);
// person.setFirstName("David");
// console.log(person.getFirstName());
// person._firstName = "Shlomo";
// console.log(person._firstName);
class Baby extends Person {
    cry() {
        super.talk("Baby is crying...");
    }
}
let baby = new Baby();
baby.cry();
