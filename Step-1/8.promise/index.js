function dividfn(n1, n2) {
    return new Promise((resolve, reject) => {
        if (n2 == "0") {
            reject("err")
        } else {
            resolve(n1/n2)
        }
    })
}
dividfn(10, 0).then(data => console.log(data)).catch(err=>console.log(err))