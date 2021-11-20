const router = require('express').Router()

router.get('/weather/city'), async function (req, res) {

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.city},us&units=imperial&appid=f0f53dca921e411cb0c59f4206e79a70`)
    .then(res.json(res))
}

  module.exports = router