console.log("ts")

interface User{
    name: string,
    id: number,
    email?: string,
    readonly createdAt:Date
}

const newUser: User={
    name:"leose",
    id: 1,
    createdAt: new Date(),
    email:"leoseeldho@gmail.com"
}
console.log(newUser)