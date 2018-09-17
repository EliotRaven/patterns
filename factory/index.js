/**
 * react developer
 *
 * @param params
 */
function reactDev(params) {
    this.name = params.name;
    this.skill = params.skill
}

/**
 * angular developer
 *
 * @param params
 */
function angularDev(params) {
    this.name = params.name;
    this.skill = params.skill
}

/**
 * vue developer
 *
 * @param params
 */
function vueDev(params) {
    this.name = params.name;
    this.skill = params.skill
}

/**
 *  factory
 */
function DeveloperFactory() {}
DeveloperFactory.prototype.devType = angularDev;
DeveloperFactory.prototype.createDeveloper = function (params) {
    switch (params.devType) {
        case 'angular':
            this.devType = angularDev;
            break;
        case 'react':
            this.devType = reactDev;
            break;
        case 'vue':
            this.devType = vueDev;
            break;
        default:
            this.devType = angularDev;
            break;
    }

    return new this.devType(params);
}

var developerFactory = new DeveloperFactory();


/**
 *  create new some developer
 */
var someDeveloper = developerFactory.createDeveloper({
    devType: 'react',
    name: 'John',
    skill: 'high'
})

/**
 *  create new another developer
 */
var anotherDeveloper = developerFactory.createDeveloper({
    name: 'Anne',
    skill: 'low'
})

console.log(someDeveloper)
console.log(anotherDeveloper)

