const fs = require('fs');

fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
        console.log("error", err)
        return 
    }else{
        console.log(data)
    }
    const newfile = data.toUpperCase()
    fs.writeFile("output.txt", newfile, (err) => {
        if (err) {
            console.log(err);
            return
        } else {
            console.log("change")
        }

        fs.readFile("output.txt", "utf8", (err, d) => {
            if (err) {
                console.log(err)
            } else {
                console.log(d)
            }
        })
    })
})