const url = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=100&query=200&a=9#hash';
const myURL = 
const SearchParamsArray = 
console.log(Array.isArray(SearchParamsArray));
SearchParamsArray.forEach((element, i) => console.log((i + 1) + '番目のquery = ' + element));

/*
true
1番目のquery = 100
2番目のquery = 200
*/
