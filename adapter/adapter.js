const RoundPeg = require('./RoundPeg')

class SquarePegAdapter extends RoundPeg {
  constructor(peg){
    super()
    this.peg = peg
  }

  get radius() {
    return (this.peg.width * Math.sqrt(2)) / 2
  }
}

module.exports = SquarePegAdapter