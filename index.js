import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Database/db.Config.js'

dotenv.config()

const PORT =process.env.PORT
const app = express();
app.use(cors())
app.use(express.json())

connectDB()

app. get('/')
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})