import cors from "cors"
import express from "express"
import { dbconnect } from "./lib/dbconnection.js"
import dotenv, { config } from "dotenv"
import todoRoute from "./Routes/todo.Routes.js"

dotenv.config()


const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())
app.use("/api/todos", todoRoute)

app.listen(port, () => {
 console.log(`server is running on port ${port}`);
 dbconnect()
})