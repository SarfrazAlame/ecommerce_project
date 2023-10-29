import mongoose from "mongoose";
import dotenv from 'dotenv'
import { users } from './data/users.js'
import { User } from './model/userModel.js'
import { Product } from "./model/productModel.js"
import { Order } from "./model/orderModel.js"
import { products } from "./data/products.js"
import { connectDB } from "./config/config.js"

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createUser = await User.insertMany(users)
        const adminUser = createUser[0]._id
        const sampleData = products.map(product => {
            return { ...product, User: adminUser }
        })
        await Product.insertMany(sampleData)
        console.log('data imported')
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

const dataDestroy = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        console.log("data destryed")
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    dataDestroy()
} else {
    importData()
}