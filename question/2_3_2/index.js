// 半角スペースが(baseSpaceCount - strlength)個格納された文字列を返すgetBlanks関数
// 0 < strlength < baseSpaceCountとする。
const getBlanks = function(baseSpaceCount, strlength) {
  const buf = ' ';
  return 
};

const url = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=100&a=9#hash';

let _url = 
const myURL = 

const whitespace = 2;
const result = [];
const names = [];

let buf = ' ';
let blanks = '';

result.push(url);
result.push(myURL.href);
result.push(myURL.protocol);
result.push(myURL.auth);
result.push(myURL.host);
result.push(myURL.port);
result.push(myURL.hostname);
result.push(myURL.pathname);
result.push(myURL.hash);
result.push(myURL.search);

names.push("url");
names.push("href");
names.push("protocol");
names.push("auth");
names.push("host");
names.push("port");
names.push("hostname");
names.push("pathname");
names.push("hash");
names.push("search");

const longestString = names.reduce((prev, current) => {
  return prev.length < current.length ? current : prev;
}, '');

const stringLengthMax = longestString.length;

console.log("stringLengthMax = " + stringLengthMax); // stringLengthMax: 8

//URLの解析結果を出す。
names.forEach((t, u) => (console.log(t + ':' + getBlanks(stringLengthMax + whitespace, t.length) + result[u])));

/*
stringLengthMax = 8
url:       https://user:pass@sub.example.com:8080/p/a/t/h?query=100&a=9#hash
href:      https://user:pass@sub.example.com:8080/p/a/t/h?query=100&a=9#hash
protocol:  https:
auth:      user:pass
host:      sub.example.com:8080
port:      8080
hostname:  sub.example.com
pathname:  /p/a/t/h
hash:      #hash
search:    ?query=100&a=9
*/
