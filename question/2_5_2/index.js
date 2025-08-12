const https_server = (function() {

  'use strict';

  const https = require('https');

  const fs = require('fs');

  // 秘密鍵ファイルを指定する。
  const sslServerKey = './pem/server-key.pem';
  // 自己署名証明書(オレオレ証明書)ファイルを指定する。
  const sslServerCrt = './pem/server-crt.pem';

  // 変数optionsにオブジェクトを格納する。
  const options = {
    // 指定されたファイルパスからファイル(秘密鍵)を同期的に読み込む。
    key: fs.readFileSync(sslServerKey),
    // 指定されたファイルパスからファイル(自己署名証明書(オレオレ証明書))を同期的に読み込む。
    cert: fs.readFileSync(sslServerCrt)
  };

  const {
    DateTime
  } = require('luxon');

  const hostname = '127.0.0.1';
  const port = 3000;

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

  const processRequest = function(req, res) {

    }

    console.log(`${getLocalTime('ja-JP', 'Asia/Tokyo')}\n`);

  };

  const server = https.createServer(options, processRequest);

  const handleRequest = function() {
    console.log(`${getLocalTime('ja-JP', 'Asia/Tokyo')} Server running at https://${hostname}:${port}/\n`);
  };

  server.listen(port, hostname, handleRequest);

})();
