const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./weatherRoutes.js'))
router.use('/api', require('./linkRoutes.js'))
router.use('/api', require('./taskRoutes.js'))
module.exports = router
