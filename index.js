const express = require('express') 
const app = express()
const port = 3000
const hostname = "127.0.0.1"
const moment = require('moment')
const morgan = require('morgan')


app.use(morgan('combined'))

app.get('/', (req, res) => res.send("Hello This is your personal BOT !!"))
app.get('/about', (req, res) => res.status(200).json({
    status : "Success",
    message : "Halow",
    data : [],
}))

app.post('/about', (req, res) => res.status(200).send("Request POST diterima"))
app.put('/about', (req, res) => res.status(200).send("Request PUT diterima"))
app.delete('/about', (req, res) => res.status(200).send("Request DELETE diterima"))


app.get("/post/:id", (req, res) => {
    const id = req.params.id
    res.send(`Artikel - ${id}`) 
})


app.get("/foods", (req, res) => {
    res.send(req.query)
})

app.use((req, res, next) => {
    res.status(404).json({
        status: "Error",
        message: "Resource not found",
    })
    next()  
})

app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`))

