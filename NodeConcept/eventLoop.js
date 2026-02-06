const fs = require("fs");
const crypto = require('crypto');

console.log("1. macro");
setTimeout(() => {
    console.log("2. macro")
});
setTimeout(() => {
    console.log("3. macro")
});
setImmediate(() => {
    console.log("4. setImmediate")
});
Promise.resolve().then(() => console.log("5. promise - micro"));

process.nextTick(() => {
    
    console.log("6. micro")
});
fs.readFile(__filename, () => {
    console.log("7. fileRead")
});
crypto.pbkdf2("secret", 'salt', 10000, 64, 'sha512', (err, key) => {
    if (err) throw new err
    console.log("8. (cpu intensive task)")
});

console.log("9. end")