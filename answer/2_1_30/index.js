let str = 'a';
let buffer = Buffer.from(str); // UTF-8エンコーディングでBufferを生成
let byteString = buffer.toString('hex'); // バイト列を16進数文字列として取得
console.log('「a」のUTF-8バイト列:' + byteString); // 結果は「61」（16進数表記）が表示される。

buffer = Buffer.from(str, 'utf16le'); // UTF-16LEエンコーディングでBufferを生成
byteString = buffer.toString('hex'); // バイト列を16進数文字列として取得
console.log('「a」のUTF-16バイト列:' + byteString); // 結果は「6100」（16進数表記）が表示される。

/*
「a」のUTF-8バイト列:61
「a」のUTF-16バイト列:6100
*/
