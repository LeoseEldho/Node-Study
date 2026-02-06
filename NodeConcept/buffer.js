const buffone = Buffer.alloc(10);
console.log(buffone);

const BufferFromString = Buffer.from('loki');
console.log(BufferFromString);

const bufferFromArray = Buffer.from([1, 2, 3, 4]);
console.log(bufferFromArray)