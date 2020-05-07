
const express = require('express')
const bodyParser = require('body-parser')

const config = require('./config')
const router = require('./api/network')

const errors = require('./network/errors')

const app = express()

app.use(bodyParser.json())

// Rutas
app.use('/api/post', router)

// Manejar errores 
app.use(errors);

app.listen(config.api.port, () => {
    console.log('Servicio posts escuchando en el puerto', config.api.port);
})