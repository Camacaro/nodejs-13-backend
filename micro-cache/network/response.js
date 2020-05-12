
exports.success = function (req, res, message, status) {  
    
    let statusCode = status || 200;
    let statusMessage = message || '';

    res.status(status).send({
        error: false,
        status: statusCode,
        body: statusMessage
    })
}

exports.error = function (req, res, error, status, message = '') {  
    
    console.log(error);

    let statusCode = status || 500;
    let statusMessage = message === '' ? error.message || 'Internal server error' : message;    

    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: statusMessage
    })
}