const url = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=100&query=200&a=9#hash';
const myURL = new URL(url);
const SearchParamsArray = myURL.searchParams.getAll('abc');
console.log(Array.isArray(SearchParamsArray));
console.log(SearchParamsArray.length);
/*
true
0
*/
