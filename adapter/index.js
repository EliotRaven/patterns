const RoundHole = require('./RoundHole')
const RoundPeg = require('./RoundPeg')
const SquarePeg = require('./SquarePeg')
const SquarePegAdapter = require('./adapter')

let hole = new RoundHole(5)
let rpeg = new RoundPeg(5)
console.log('1 test: ', hole.fits(rpeg))

let small_sqpeg = new SquarePeg(5)
let large_sqpeg = new SquarePeg(10)
console.log('2 test: ', hole.fits(small_sqpeg))

let small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg)
let large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg)
console.log('3 test: ', hole.fits(small_sqpeg_adapter), hole.fits(large_sqpeg_adapter) )