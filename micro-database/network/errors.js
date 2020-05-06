
const response = require('./response')

function errors (err, req, res, next) {
    
    console.error('[error]', err);

    const message = err.message || 'Error interno';
    const status = err.statusCode || 500;

    let statusCode = status || 500;
    let statusMessage = message === '' ? error.message || 'Internal server error' : message;    

    response.error(req, res, err, statusCode, statusMessage)
}

module.exports = errors