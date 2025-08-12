const http_server = (function() {

  'use strict';

  const {
    DateTime
  } = require('luxon');

  const express = require('express');

  const app = express();

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

  const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const processRequest = function(req, res) {

    /*
    req.protocolは、Expressフレームワークで提供される特別なプロパティである。
    req.protocolで「http」と「https」のどちらかを取得可能である。
    Expressフレームワークを使わない場合、req.protocolはundefinedである。
    
    req.pathは、Expressフレームワークで提供される特別なプロパティである。
    プロパティはリクエストのURLパスであり、
    myURL.pathname === req.pathとなる。
    Expressフレームワークを使わない場合、req.pathはundefinedである。
    */
    const url = `${req.protocol}://${req.headers.host}`;

    // req.urlは相対URLが入る。
    // urlはベースurl(相対URLを解決するための基準となるURL)が入る。
    // URLオブジェクトのコンストラクタを使用して新しいURLインスタン
    // スを生成し、それをmyURLに格納する。このようにして、myURLは
    // URLオブジェクトのインスタンスを表す。
    const myURL = new URL(req.url, url);

    // httpメソッド
    const method = req.method;

    // クライアントのIPアドレスを取得
    const clientIP = req.connection.remoteAddress;

    // リクエストの送信元ポート番号を取得
    const clientPort = req.socket.remotePort;

    // ヘッダーを取得
    const headers = req.headers;

    console.log('Request URL:' + myURL.href);
    console.log('HTTP method:' + method);
    console.log('Client IP:' + clientIP);
    console.log('Client Port:' + clientPort);
    console.log('Headers:' + JSON.stringify(headers));

    switch (req.path) {
      case '/':
        console.log('Status Code:200');
        //  http://127.0.0.1:3000/にアクセスした来た場合、
        // 「/」(ルート)がリクエストされる。
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!');
        break;
      default:
        console.log('Status Code:404');
        // 「/」(ルート)以外がリクエストされた場合はすべて404
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 not found');
        break;
    }

    console.log(`${getLocalTime('ja-JP', 'Asia/Tokyo')}\n`);

  };

  // GETリクエストに対する処理
  app.get('*', processRequest);

  // POSTリクエストに対する処理
  app.post('*', processRequest);

  const handleRequest = function() {
    console.log(`${getLocalTime('ja-JP', 'Asia/Tokyo')} Server running at http://${hostname}:${port}/\n`);
  };

  app.listen(port, hostname, handleRequest);

})();
