const router = require('express').Router()
const { Task, User } = require('../models')
const passport = require('passport')
//add new link
router.post('/tasks', passport.authenticate('jwt'), async function (req, res) {
  const task = await Task.create({ ...req.body })
  await Task.findByIdAndUpdate(task._id, { $push: { users: req.user._id } })
  await User.findByIdAndUpdate(req.user._id, { $push: { tasks: task._id } })
  res.json(task)
})

router.get('/tasks', async function (req, res) {

  const tasks = await Task.find({})
  res.json(tasks)
})


// route fto populate user links
router.get('/tasks/id', passport.authenticate('jwt'), async function (req, res) {
  res.json(req.user.tasks)
})

// route for deleting a a link
router.delete('/tasks/:id', passport.authenticate('jwt'), async function (req, res) {
  // find item by id and delete
  await Task.findByIdAndDelete(req.params.id)
  // find user, then update by pulling req.params.id from the users jobs array
  await User.findByIdAndUpdate(req.user._id, { $pull: { tasks: req.params.id } })
  res.sendStatus(200)
})


module.exports = router