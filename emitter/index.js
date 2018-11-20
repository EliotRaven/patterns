function Emitter() {
    this.events = {}
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || []
    this.events[type].push(listener)
}

Emitter.prototype.emit = function (type, params) {
    if(this.events[type]){
        this.events[type].forEach(function (listener) {
            listener(params)
        })
    }
}

var emitter = new Emitter()

emitter.on('say:hi', function (name) {
    console.log('Hi! ' + name)
})

emitter.emit('say:hi', 'John')

