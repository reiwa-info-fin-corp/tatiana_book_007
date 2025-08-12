const {
  DateTime2
} = require('luxon');

let JST = DateTime2.now().setZone('Asia/Tokyo').toFormat('yyyy-MM-dd(EEE) HH:mm:ss.SSS');

console.log(JST); // 2024-06-30(Sun) 17:05:55.013
