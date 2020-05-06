
const express = require('express')
const bodyParser = require('body-parser')

const config = require('../config')
const router = require('./network')

const errors = require('../network/errors')

const app = express()

app.use(bodyParser.json())

// Rutas
app.use('/', router)

// Manejar errores 
app.use(errors);

app.listen(config.dbService.port, () => {
    console.log('Servicio de mysql escuchando en el puerto', config.dbService.port);
})