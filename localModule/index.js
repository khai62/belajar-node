// belajar node js module system yairu local module 


// const fs = require('fs'); //ini adalah core module
// const cetakNama =  require('./coba') // ini cara mengimport local module
// const moment = require('moment'); //ini adalah third party module / node module


const coba = require('./coba');

console.log(coba.cetakNama('khairuddin'), coba.Pi, coba.mhs.cetakMhs());