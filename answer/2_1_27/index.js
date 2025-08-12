const {
  DateTime
} = require('luxon');

const getLocalTime = function(locale, timeZone) {

  // 日本時間 (JST) で現在の日時を取得
  const localTime = DateTime.now().setLocale(locale).setZone(timeZone);

  // 英語ロケールでの曜日を取得
  const weekdayEN = localTime.setLocale('en-US').toFormat('EEE');

  // タイムゾーンの英字3文字表記を取得
  const timeZoneAbbreviation = localTime.toFormat('ZZZZ');

  // フォーマットして出力
  let formattedTime = localTime.toFormat('yyyy-MM-dd(week) HH:mm:ss.SSS');
  formattedTime = `[${timeZoneAbbreviation}] ${formattedTime}`;

  // weekを英語の曜日に置換
  formattedTime = formattedTime.replace(/week/, weekdayEN);

  return formattedTime;

};

console.log(getLocalTime('en-US', 'America/Los_Angeles'));
console.log(getLocalTime('en-US', 'America/New_York'));
console.log(getLocalTime('en-US', 'America/Mexico_City'));
console.log(getLocalTime('en-UK', 'Europe/London'));
console.log(getLocalTime('en-GB', 'Europe/London'));
console.log(getLocalTime('ja-JP', 'Asia/Tokyo'));
console.log(getLocalTime('ja-JP', 'Asia/Tokyo'));
/*
[PDT] 2024-05-18(Sat) 00:57:54.378
[EDT] 2024-05-18(Sat) 03:57:54.428
[CST] 2024-05-18(Sat) 01:57:54.429
[BST] 2024-05-18(Sat) 08:57:54.431
[BST] 2024-05-18(Sat) 08:57:54.435
[JST] 2024-05-18(Sat) 16:57:54.436
[JST] 2024-05-18(Sat) 16:57:54.438
*/
