const mongoose = require('../../config/mongoose-conect');
var restful = require('node-restful');

var Quiz = restful.model('user', mongoose.Schema({
  question: { type: String, required: true },
  answers: [{ type: String, required: true }],
  created_at: Date,
  updated_at: Date
}))
.methods(['get', 'post', 'put', 'delete']);

module.exports = Quiz;