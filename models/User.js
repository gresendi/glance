const { model, Schema } = require('mongoose')

const User = new Schema({
  first_name: String,
  last_name: String,
  username: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  }
  
  
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
