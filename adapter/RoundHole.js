class RoundHole {
  constructor (radius) {
    this._radius = radius
  }

  get radius () {
    return this._radius
  }

  fits(peg) {
    return this.radius >= peg.radius
  }
}

module.exports = RoundHole