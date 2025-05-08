const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")


app.use('/blog', blog)

//middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.Andy = "I am Andy";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next()
  })

//middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.Andy = "I am Rohan";
    next()
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!' + req.Andy)
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
