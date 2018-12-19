
class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} (s) old.`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        if (this.homeLocation) {
            const greeting = super.getGreeting();
            return `${greeting} I'm visiting from ${this.homeLocation}`;
        } else {
            return super.getGreeting();
        }
        
    }
}

const me = new Traveler('Qingdong', 30, 'New York');
console.log(me.getGreeting());

const xiaoming = new Traveler();
xiaoming.age = 25; 
console.log(xiaoming.getGreeting());