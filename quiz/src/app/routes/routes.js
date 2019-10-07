var User = require('../domain/Quiz');

module.exports = (app) =>{
    
    User.register(app, '/quizes');

}

