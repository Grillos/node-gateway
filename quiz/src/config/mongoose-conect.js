var restful = require('node-restful'),
    mongoose = restful.mongoose;
    
mongoose.connect('mongodb://db/quiz');

module.exports = mongoose