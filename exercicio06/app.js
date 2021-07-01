const express = require('express')
const app = express()

app.use(express.json())


app.get('/infos', (req, res) => {
    res.json()
})

app.post('/infos', (req, res) => {
    let { max_velocity_allowed, car_velocity } = req.body

    const info = [
        {
            traffic_ticket: true,
            velocity__exceeded: car_velocity,
            percentage_exceeded: 0
        }
    ]

    const carVelocityExceeded = (velocity) => {
        let percentageExceedded = ((car_velocity - max_velocity_allowed) / max_velocity_allowed) * 100
        if (percentageExceedded >= 10) {
            info.map(i => (
                i.traffic_ticket = true,
                i.velocity__exceeded = velocity,
                i.percentage_exceeded = percentageExceedded.toFixed(2)
            ))
            res.json(info)
        } else {
            info.map(i => (
                i.traffic_ticket = false,
                i.velocity__exceeded = velocity,
                i.percentage_exceeded = percentageExceedded.toFixed(2)
            ))
            res.json(info)
        }
    }
    carVelocityExceeded(car_velocity)
})

app.listen(3000, () => {
    console.log("Servidor ON!")
})