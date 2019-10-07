const mongoose = require('../../config/mongoose-conect');
const restful = require('node-restful');
const log4js = require('log4js');

log4js.configure({
  appenders: { cheese: { type: 'file', filename: '/tmp/user.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger('cheese');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');

var User = restful.model('user', mongoose.Schema({
  id: String,
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: Date,
  updated_at: Date
}))
.methods(['get', 'post', 'put', 'delete']);

module.exports = User;