const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const options = {
    swaggerDefinitions: {
        inf :{
            title: 'Account Api',
            version: '1.0.0',
            description: 'Account Express Api'
        },
        api: ['src/app/routes/routes.js']
    },
    basePath: '/'
};

//const specs = swaggerJsDoc(options)

module.exports = (app) =>{
app.use('api-docs', swaggerUi.serve, swaggerUi.setup(options))
}