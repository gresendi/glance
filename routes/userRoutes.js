const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { json } = require('express')

// Get current user information.
router.get('/user', passport.authenticate('jwt'), (req, res) => res.json(req.user))

// Get a user's information by their email.
router.get('/users/:email', (req, res) => {
  User.findOne({ username: req.params.email }, (err, docs) => {
    if (err) { res.json(err) }
    else { res.json(docs) }
  })
})

// Create a new user.
router.post('/users/register', (req, res) => {
  const { first_name, last_name, username,  password } = req.body
  console.log(req.body )
  // Use mongoose to create new instance of a user with passpost authentication.
  User.register(new User({ first_name, last_name, username }), password, err => {
    if (err) {
      res.json({
        err: err,
        req: {
          first_name: first_name,
          last_name: last_name,
          username: username,
         
          password: req.body.password
        }
      })
    } else {
      res.json({
        status: 200,
        user: {
          first_name: first_name,
          last_name: last_name,
          username: username,
        
        }
      })
    }
  })
})

// Authenicate a user and sign them in if user params match. (token to secret)
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

// Route to find a user by id and update their information.
router.put('/users', passport.authenticate('jwt'), async function (req, res) {
  // Find user by id then set the passed in changes, and store response into a variable.
  await User.findByIdAndUpdate(req.user._id, { $set: req.body })
  // Console log any errors, otherwise send back updated user data.
  res.sendStatus(200)
})

module.exports = router
