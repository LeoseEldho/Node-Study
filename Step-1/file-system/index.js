const fs = require('fs');
const path = require('path');

const datafolder = path.join(__dirname, "datafolder");

if (!fs.existsSync(datafolder)) {
    fs.mkdirSync(datafolder);
}

const filePath = path.join(datafolder, "index.js");

fs.writeFileSync(filePath, "console.log ");
console.log(__dirname);

const anynsFile = path.join(datafolder, "asyncFile.txt");
fs.writeFile(anynsFile, "Hello Biju", (error) => {
    if(error)throw (error);
    console.log("true");
});

fs.readFile(anynsFile, "utf8", ((err, data) => {
    if (err) {
        return err
    } else {
        console.log(data)
    }
}))