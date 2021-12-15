const { model, Schema } = require('mongoose')

const Task = new Schema({
  task: String,
  isDone: Boolean,
  location: {type: String, default:'today'},
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]

})

module.exports = model('Task', Task)