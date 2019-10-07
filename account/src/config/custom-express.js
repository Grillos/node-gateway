const express = require('express')
const bodyParser = require('body-parser');
const routes = require('../app/routes/routes')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes(app)
module.exports = app