const http_server = (function() {

  'use strict';

  const {
    DateTime
  } = require('luxon');

  const getLocalTime = function(locale, timeZone) {

    // 日本時間 (JST) で現在の日時を取得
    const localTime = DateTime.now().setLocale(locale).setZone(timeZone);

    // 英語ロケールでの曜日を取得
    const weekdayEN = 

    // タイムゾーンの英字3文字表記を取得
    const timeZoneAbbreviation = 

    // フォーマットして出力
    let formattedTime = localTime.toFormat('yyyy-MM-dd(week) HH:mm:ss.SSS');
    formattedTime = `[${timeZoneAbbreviation}] ${formattedTime}`;

    // weekを英語の曜日に置換
    formattedTime = formattedTime.replace(/week/, weekdayEN);

    return formattedTime;

  };

  const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const processRequest = function(req, res) {
  };

  const server = http.createServer(processRequest);

  const handleRequest = function() {
    console.log(`${getLocalTime('ja-JP', 'Asia/Tokyo')} Server running at http://${hostname}:${port}/\n`);
  };

  server.listen(port, hostname, handleRequest);

})();
