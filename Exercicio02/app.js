const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())


app.use(express.json())

app.get('/infos', function (req, res) {
    const atualDate = new Date().toLocaleString('pt-BR')
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=goiania&appid=26758610b1b3ea740b9e095f2a764113")
        .then((response) => {
            const { temp } = response.data.main
            const { name } = response.data
            const infos = [
                {
                    "date": atualDate,
                    "cityName": name,
                    "tempFahrenhit": temp
                },
            ]
            return res.json(infos)
        })
})

app.listen(3000, () => {
    console.log("Servidor Rodando!")
})