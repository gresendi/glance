const router = require('express').Router()
const { json } = require('express')


router.get('/weather', (req,res)=>{
  
  let city = req.params.city
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=f0f53dca921e411cb0c59f4206e79a70`)
  .then(res =>{
    console.log(res)
    res.json(res)
  })


}) 


 


  module.exports = router