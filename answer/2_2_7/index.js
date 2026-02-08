/*
Buffer.from(string): 文字列をバッファに変換する際に、
エンコーディングを指定しない場合、デフォルトでUTF-8エンコーディングが使われる。
*/
const bufLE = Buffer.from('@', 'utf16le'); // バッファを作成
console.log(bufLE); // <Buffer 40 00>

// LE → BE に変換（swap16 は破壊的なのでコピーして使用）
const bufBE = Buffer.from(bufLE).swap16();
console.log('Swapped to UTF-16BE:', bufBE);// Swapped to UTF-16BE: <Buffer 00 40>

// Base64エンコード
const base64String = bufBE.toString('base64'); // バッファをBase64文字列に変換
console.log(base64String); // AEA=
