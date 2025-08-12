let str = 'あ';
let buffer = Buffer.from(str); // UTF-8エンコーディングでBufferを生成
let byteString = buffer.toString('hex'); // バイト列を16進数文字列として取得
console.log('「あ」のUTF-8バイト列:' + byteString); // 結果は「61」（16進数表記）が表示される。

buffer = Buffer.from(str, 'utf16le'); // UTF-16LEエンコーディングでBufferを生成
byteString = buffer.toString('hex'); // バイト列を16進数文字列として取得
console.log('「あ」のUTF-16バイト列:' + byteString); // 結果は「e38182」（16進数表記）が表示される。

/*
「あ」のUTF-8バイト列:e38182
「あ」のUTF-16バイト列:4230
*/
