
const jwt = require('jsonwebtoken')
const config = require('../config')
const secret = config.jwt.secret

const sign = (data) => {
    return jwt.sign(data, secret)
}

const verify = (token) => {
    return jwt.verify(token, secret)
}

const check = {
    own: function (req, owner) {
        const decoded = decodeHeader(req)
        console.log(decoded);

        // COMPROBAR SI ES O NO PROPIO
        if( decoded.id !== owner){
            throw new Error('No puedes hacer esto')
        }
    },
}

const getToken = (authorization) => {
    
    if(!authorization) {
        throw new Error('No viene token')
    }

    if( authorization.indexOf('Bearer ') === -1 ) {
        throw new Error('Formato invalido')
    }

    let token = authorization.replace('Bearer ', '')
    return token
}


const decodeHeader = (req) => {
    
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token)

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check,
}