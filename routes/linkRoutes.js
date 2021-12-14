const router = require('express').Router()
const {Link, User} = require('../models')
const passport = require('passport')
//add new link
router.post('/links', passport.authenticate('jwt'), async function (req, res) {
  const link = await Link.create({...req.body})
  await Link.findByIdAndUpdate(link._id,{$push:{users:req.user._id}})
  await User.findByIdAndUpdate(req.user._id, {$push:{links: link._id}})
  res.json(link)
})

router.get('/links', async function (req, res) {

  const links = await Link.find({})
  res.json(links)
})


// route fto populate user links
router.get('/links/id', passport.authenticate('jwt'), async function (req, res) {
  res.json(req.user.links)
})

// route for deleting a a link
router.delete('/links/:id', passport.authenticate('jwt'), async function (req, res) {
  // find item by id and delete
  await Link.findByIdAndDelete(req.params.id)
  // find user, then update by pulling req.params.id from the users jobs array
  await User.findByIdAndUpdate(req.user._id, { $pull: { links: req.params.id } })
  res.sendStatus(200)
})


module.exports = router