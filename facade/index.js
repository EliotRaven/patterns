var auth = (function () {
    var self = {
        valid: false,
        auth: false,
        check: function () {
            return (this.auth) ? 'you are logged in' : 'please authorise'
        },
        login: function (name, pass) {
            this.valid = this._validation(name, pass)

            if(this.valid) {
                this.auth = !!(this._rand(0, 10) >= 5)
            }

            return (this.auth) ? 'auth success' : 'auth failed'
        },
        _validation: function(name, pass){
            return !!(name && pass)
        },
        _rand: function (min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }
    }
    return {
        facade: {
            check: function () {
                return self.check()
            },
            login: function (args){
                return self.login(args.name, args.pass)
            }
        }
    }
}())

var authUser = auth.facade.login({name: 'user', pass: 123456})
var checkAuth = auth.facade.check()

console.log('auth status: ', authUser, ', check auth: ', checkAuth)



