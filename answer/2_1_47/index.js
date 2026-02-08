// バッファを2バイトずつ読み込み、バイト順序を入れ替える
// swapBytes:バイトを入れ替える
const swapBytes = function(buffer) {

  // Buffer.allocは、Node.jsでバッファを新しく作成するためのメソッドである。
  // 指定したサイズのバッファを初期化して、使用可能な状態にする。
  const swappedBuffer = Buffer.alloc(buffer.length);
  buffer.forEach((value, index) => {
    //console.log(index,  index % 2);
    if (index % 2 === 0) {
      swappedBuffer[index] = buffer[index + 1];
      swappedBuffer[index + 1] = value;
    }
  });
  return swappedBuffer;

}

const str = 'abc';

// UTF-16LE バッファ作成
let bufLE = Buffer.from(str, 'utf16le');
console.log('UTF-16LE(original):', bufLE);

// LE → BE に変換
const bufBE = swapBytes(bufLE);
console.log('Swapped to UTF-16BE:', bufBE);

// BE → LE に変換
bufLE = swapBytes(bufBE);
console.log('Swapped back to UTF-16LE:', bufLE);

/*

UTF-16LE(original): <Buffer 61 00 62 00 63 00>
Swapped to UTF-16BE: <Buffer 00 61 00 62 00 63>
Swapped back to UTF-16LE: <Buffer 61 00 62 00 63 00>

*/
