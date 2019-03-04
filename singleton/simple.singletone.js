var Singleton = (function () {
    var instance;

    return function singletonConstructor() {
        if(instance) return instance;

        if(this && this.constructor === singletonConstructor) {
            instance = this
        } else {
            return new singletonConstructor();
        }
    }
}())

var someSingleton = new Singleton();
var anotherSingleton = new Singleton()

console.log(someSingleton, anotherSingleton)