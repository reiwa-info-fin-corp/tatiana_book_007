let str = 'あ';
// Node.jsで UTF-8 エンコードされた文字列のバイト数を取得するには、
// Buffer.byteLength() を使用する。このメソッドは、文字列を UTF-8
// としてエンコードしたときの実際のバイト数を返す。
console.log('「あ」は、UTF-8で'+Buffer.byteLength(str)+'バイトである。');

// Buffer.byteLengthの第2引数には、エンコーディングとしてutf16le(UTF-16 Little Endian)
// がサポートされている。

console.log('「あ」は、UTF-16で'+Buffer.byteLength(str,'utf16le')+'バイトである。');

/*
「あ」は、UTF-8で3バイトである。
「あ」は、UTF-16で2バイトである。
*/

