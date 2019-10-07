var User = require('../domain/User');

module.exports = (app) =>{
    
    User.register(app, '/users');

}

