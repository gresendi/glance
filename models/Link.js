const {model, Schema } = require('mongoose')

const Link = new Schema({
  linkName: String,
  link: String,
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]

})

module.exports = model('Link', Link)