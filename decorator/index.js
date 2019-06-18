var Person = function (name) {
    this.name = name
}

Person.prototype.sayHi = function () {
    console.log('Hi, my name is ' + this.name)
}

var man = new Person('John')

man.works = ['cooking', 'signing']
man.sayHi = function () {
    Person.prototype.sayHi.call(this)
    console.log('I love my jobs ' + this.works)
}

man.sayHi()
