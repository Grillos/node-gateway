var restful = require('node-restful'),
    mongoose = restful.mongoose;
    
mongoose.connect('mongodb://localhost:27017/account');

module.exports = mongoose