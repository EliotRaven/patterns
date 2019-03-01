const iBuilder = require('./main.interface')

class ManualBuilder extends iBuilder {
  constructor () {
    super()
  }

  getResult () {
    return this.obj
  }
}

module.exports = ManualBuilder