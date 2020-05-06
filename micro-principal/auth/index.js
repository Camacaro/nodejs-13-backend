
const jwt = require('jsonwebtoken')
const config = require('../config')
const error = require('../utils/error')

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
        // COMPROBAR SI ES O NO PROPIO
        console.log(decoded.id, owner);
        if( decoded.id !== owner){
            throw error('No puedes hacer esto', 401)
            // throw new Error('No puedes hacer esto')
        }
    },

    logged: function (req) {
        const decoded = decodeHeader(req)
    },
}

const getToken = (authorization) => {
    
    if(!authorization) {
        throw error('No viene token', 401)
        // throw new Error('No viene token')
    }

    if( authorization.indexOf('Bearer ') === -1 ) {
        throw error('Formato invalido', 401)
        // throw new Error('Formato invalido')
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