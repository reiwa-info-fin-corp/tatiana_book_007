const express = require('express');
const app = express();

// リクエスト処理関数
const processRequest = function(req, res) {
  console.log(`Request URL: ${req.url}`);
  console.log(`HTTP Method: ${req.method}`);
  res.status(200).send('200 OK');
}

// GETリクエストに対する処理 Express 4.x.x
app.get('*', processRequest);

// POSTリクエストに対する処理 Express 4.x.x
app.post('*', processRequest);

// サーバー起動
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
