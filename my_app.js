const express = require("express")
const Product = require("./models/productModel")
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

// Use json middleware
app.use(express.json())

// Route for the home page
app.get('/', (req, res) => {
    res.send('<center><p><h1>Welcome to <i>entrepriz v0.1</i></h2>CRUD (Create Read Update Delete) operations<hr />Powered by NodeJS - Express and MongoDB</p></center>')
})

// Create products
app.post('/products', async(req, res) => {
    try {
        const all_products = await Product.create(req.body)
        res.status(200).json(all_products)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
})

// Fetch all the products
app.get('/products', async (req,res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
})

// Fetch one product with a specific id
app.get('/products/:id', async (req,res) => {
    try {
        const {id} = req.params
        const my_product = await Product.findById(id)
        res.status(200).json(my_product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
})

// Update a product with a specific id
app.put('/products/:id', async (req,res) => {
    try {
        const {id} = req.params
        const the_product = await Product.findByIdAndUpdate(id, req.body)
        if(!the_product) {
            return res.status(404).json({message: `We could not find any product with id ${id}`})
        }
        const updated_product = await Product.findById(id)
        res.status(200).json(updated_product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
})

// Delete a product with a specific id
app.delete('/products/:id', async (req,res) => {
    try {
        const {id} = req.params
        const the_product = await Product.findByIdAndDelete(id, req.body)
        if(!the_product) {
            return res.status(404).json({message: `We could not find any product with id ${id}`})
        }
        res.status(200).json(the_product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
})

// Connect to the database
mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected!')
    })
    .catch((err) => {
        console.log("Could not connect to DB - " + err)
    })

// Run the application on port 8080
app.listen(process.env.PORT, () => {
    console.log("Node API app is running on port 3000")
})

