const {
  DateTime
} = require('luxon');

let JST = DateTime.now().setZone('Asia/Tokyo').toFormat('yyyy-MM-dd(EEE) HH:mm:ss.SSS');

console.log(JST); // 2024-06-30(Sun) 17:05:55.013
