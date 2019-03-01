const iBuilder = require('./main.interface')

class CarBuilder extends iBuilder {
  constructor () {
    super()
  }

  getResult () {
    return this.obj
  }
}

module.exports = CarBuilder