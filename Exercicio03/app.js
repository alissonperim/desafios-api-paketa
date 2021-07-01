const express = require('express')
const cors = require('cors')
const EMPLOYEES_LIST = require('./employees.json')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/employees', (req, res) => {
    res.json(EMPLOYEES_LIST)
})

app.post('/employees', (req, res) => {
    const { employee, salary } = req.body
    const liquidSalary = (sal) => {
        sal -= sal * 0.1
        return sal.toFixed(2)
    }

    res.json({
        employee,
        salary: liquidSalary(salary)
    })
})

app.listen(3000, () => {
    console.log("Servidor rodando")
})