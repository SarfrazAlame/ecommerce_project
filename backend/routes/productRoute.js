import express from 'express'
import { Product } from '../model/productModel.js'
import asynchandler from "express-async-handler"

const router = express.Router()

// get routes for all products
router.get("/products", asynchandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

// get route for single product
router.get("/products/:id", asynchandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        return res.json(product)
    } else {
        return res.json({ message: "product not found" })
    }
}))

export default router