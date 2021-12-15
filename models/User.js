const { model, Schema } = require('mongoose')

const User = new Schema({
  first_name: String,
  last_name: String,
  username: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  links:[{
    type: Schema.Types.ObjectId,
    ref: 'Link'
  }],
  tasks:[{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }]
  
  
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
