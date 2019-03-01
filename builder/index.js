const Director = require('./main.director')
const CarBuilder = require('./car.builder')
const ManualBuilder = require('./manual.builder')

class Application {
  constructor () {
    this.director = new Director()
  }

  makeSportCar () {
    let carBuilder = new CarBuilder()
    this.director.constructSportsCar(carBuilder)
    return carBuilder.getResult()
  }


  makeManual () {
    let carManualBuilder = new ManualBuilder()
    this.director.constructSportsCar(carManualBuilder)

    return carManualBuilder.getResult()
  }
}

let app = new Application()

console.log('car: ', app.makeSportCar(), '\n', 'manual: ', app.makeManual())





