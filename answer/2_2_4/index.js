/*
Buffer.from(string): 文字列をバッファに変換する際に、
エンコーディングを指定しない場合、デフォルトでUTF-8エンコーディングが使われる。
*/
const buffer = Buffer.from('@', 'utf16le'); // バッファを作成
console.log(buffer); // <Buffer 40 00>

// Base64エンコード
const base64String = buffer.toString('base64'); // バッファをBase64文字列に変換
console.log(base64String); // QAA=
