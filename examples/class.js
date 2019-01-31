class Animal {
    constructor(age) {
        this.age = age;
    }
    
    get getAge() {
        return this.age;
    }
    set setAge(newAge) {
        this.age = newAge;
    }
    static printType() {
        return "Animal";
    }
}
console.log(Animal.printType());
class Cow extends Animal {
    constructor(colors, age) {
        // colors[0] = 'yellow';
        super(age);
        console.log(`Cow's age is ${super.getAge}`);
        this.colors = colors;
    }
    printColors() {
        console.log(this.colors);
    }
}

// let tiger = new Animal(12);
// console.log(`BEFORE SETTING: ${tiger.getAge()}`);
// tiger.setAge(42);
// console.log(`AFTER SETTING: ${tiger.getAge()}`);
const colorsArray = ['black', 'white'];
const cowAge = 18;
let crazyCow = new Cow(colorsArray, cowAge);
console.log(colorsArray);
crazyCow.printColors();