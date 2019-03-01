class Director {
  constructSportsCar (builder) {
    builder.reset()
    builder.setSeats(2)
    builder.setEngine('Sport Engine')
    builder.setTripComputer(true)
    builder.setGPS(true)
  }
}

module.exports = Director