var Animal = function(paws, voice, name){
    this.name = name;
    this.paws = paws;
    this.voice = voice
};

Animal.prototype.greet = function () {
    console.log("Hi! I'm " + this.name + " and i say " + this.voice + ". I have " + this.paws + " paws")
};

var cat = new Animal(4, 'meow', 'Kitty');
cat.greet();

// if we use es6, we can use class
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    bio() {
        console.log(`Hi! My name is ${this.name}, and I ${this.age} old`)
    }
}

let man = new Person('John', 25)
man.bio()