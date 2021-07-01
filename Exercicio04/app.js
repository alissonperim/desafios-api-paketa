const express = require('express')
const app = express()
const { last_name } = require('./user.json')
app.use(express.json())

app.get('/', (req, res) => {
    let lastNameLength = last_name.length
    res.json({
        last_name: lastNameLength
    })
})

app.listen(3000, () => {
    console.log("Servidor ON")
})