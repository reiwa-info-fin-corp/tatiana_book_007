const url = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=100&a=9#hash';
const myURL = new URL(url);
console.log('query = ' + myURL.searchParams.get('query')); // 100
console.log('query2 = ' + myURL.searchParams.get('query2')); // null
