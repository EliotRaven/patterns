class iBuilder {
  constructor (props) {
    this.obj = props
  }

  reset () {
    return this.obj = {}
  }

  setSeats (params) {
    this.obj.seats = params
  }

  setEngine (params) {
    this.obj.engine = params
  }

  setTripComputer (params) {
    this.obj.tripComputer = params
  }

  setGPS (params) {
    this.obj.gps = params
  }
}

module.exports = iBuilder