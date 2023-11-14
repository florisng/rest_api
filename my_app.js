const express = require("express")
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/blog', (req, res) => {
    res.send('This is the blog page')
})

app.get('/about', (req, res) => {
    res.send('About my app - Ready to run okay')
})

app.listen(3000, () => {
    console.log("Node API app is running on port 3000")
})

