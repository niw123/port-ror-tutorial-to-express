const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const userSchema = Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 50,
    trim: true,
    required: true
  },
  email: {
    type: String,
    minlength: 1,
    maxlength: 255,
    trim: true,
    unique: true,
    required: true
  }
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema);
