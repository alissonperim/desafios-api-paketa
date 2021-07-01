const express = require('express')
const app = express()

app.use(express.json())


app.get('/infos', (req, res) => {
    res.json()
})

app.post('/infos', (req, res) => {
    let { max_velocity_allowed, car_velocity } = req.body
    let velocity_exceeded = 0

    const info = [
        {
            traffic_ticket: true,
            velocity__exceeded: velocity_exceeded,
            percentage_exceeded: "10%"
        }
    ]

    const carVelocityExceeded = (velocity) => {
        if (car_velocity > max_velocity_allowed) {
            let percentageExceedded = ((car_velocity - max_velocity_allowed) / max_velocity_allowed) * 100
            if (percentageExceedded >= 10)
                info.map(i => (
                    i.traffic_ticket = true,
                    i.velocity__exceeded = velocity,
                    i.percentage_exceeded = percentageExceedded
                ))
            res.json(info)
        } else {
            info.map(i => (
                i.traffic_ticket = false,
                i.velocity__exceeded = 0,
                i.percentage_exceeded = 0
            ))
            res.json()
        }
    }
    carVelocityExceeded(car_velocity)
})

app.listen(3000, () => {
    console.log("Servidor ON!")
})