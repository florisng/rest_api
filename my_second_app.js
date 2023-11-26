const express = require("express")
require('dotenv').config()
const port = process.env.PORT || 5000
const router = require("./routes/goalRoutes")

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to my second app")
})

app.use("/goals", router)

app.listen(port, () => {
    console.log("Welcome to my second app")
})

