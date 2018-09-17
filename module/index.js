var module = (function(){
    var users = ['John', 'Jane', 'Sam'];
    var getUsers = function () {
        return users
    }

    return {
        getUsers: getUsers
    }
})

console.log(module.getUsers()) // array of users
console.log(module.users) // undefined