import express from 'express'
import { products } from './data/products.js'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/config.js'
import productRoute from './routes/productRoute.js'
import { errorHandler } from './middleware/errorMiddleware.js'

// dotenv config
dotenv.config()

// connecting to mongodb database   
connectDB()

const app = express()
app.use(cors())                                                                     
app.use("/api", productRoute)
app.use(errorHandler)   


app.get("/", (req, res) => {
    res.send("hello worl")
})

app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`)
})