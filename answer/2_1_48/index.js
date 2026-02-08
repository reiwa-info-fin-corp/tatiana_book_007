const str = 'abc';

// UTF-16LE バッファ作成
let bufLE = Buffer.from(str, 'utf16le');
console.log('UTF-16LE(original):', bufLE);

// LE → BE に変換（swap16 は破壊的なのでコピーして使用）
//const bufBE = swapBytes(bufLE);
const bufBE = Buffer.from(bufLE).swap16();
console.log('Swapped to UTF-16BE:', bufBE);

// BE → LE に変換
const bufLE2 = Buffer.from(bufBE).swap16();
console.log('Swapped back to UTF-16LE:', bufLE2);

/*

UTF-16LE(original): <Buffer 61 00 62 00 63 00>
Swapped to UTF-16BE: <Buffer 00 61 00 62 00 63>
Swapped back to UTF-16LE: <Buffer 61 00 62 00 63 00>

*/
