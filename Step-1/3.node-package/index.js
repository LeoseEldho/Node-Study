let lodash = require('lodash');
const name = ['biju', 'roshan', 'basil', 'messi', 'cr7'];
let capitalize = lodash.map(name,lodash.capitalize);
console.log(capitalize);


let arr = ['l', 'e', 'o', 's'];
let result = arr.map((i) => i);
console.log(result)