
import express from "express";
import type { Express, Request, Response,NextFunction } from "express"

const app:Express = express()

app.use(express.json())

interface customRequest extends Request{
    startTime?:number
}
app.use((req:customRequest, res:Response, next:NextFunction) => {
    req.startTime=Date.now()
    next()
})

app.get('/', (req:Request, res:Response) => {
    res.send("Home Page")
})

interface User{
    name: string,
    email:string
}

app.post('/get', (req: Request<{},{},User,{}>, res:Response) => {
    const { name, email } = req.body
    res.json(`The name is ${name} and email is ${email}`)
})

app.get("/get/:id", (req:Request<{id:String}>, res: Response) => {
    const { id } = req.params
    res.json({
        userId:id
    })
})
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is Connected", PORT);
});
