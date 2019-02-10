enum Gender {
    male = "1",
    female = "2"
}

class Person {
    public age: number = 42;
    public gender: string = Gender.male;
    private firstName: string;

    public walk(): void {
        console.log("walking");
    }

    public talk(word: string = "Umm", female?: boolean): void {
        console.log(`${ female ? 'Woman' : 'Man' } says ${word}`);
    }

    // custom getter
    public getFirstName(): string {
        return this.firstName;
    }
    // custom setter
    public setFirstName(firstName: string): string {
        if (!firstName) {
            console.error("Missing First Name");
            return;
        }
        this.firstName = firstName;
    }
    // native getter
    get _firstName(): string {
        return this.firstName;
    }
    // native setter
    set _firstName(firstName: string) {
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

let baby: Baby = new Baby();
baby.cry();