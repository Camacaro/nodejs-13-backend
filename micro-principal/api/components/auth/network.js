const express = require('express');

const  response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

router.post('/login', login)

// Internal function
async function login (req, res) {
    let token;
    
    try {
        token = await controller.login(req.body.username, req.body.password);
    } catch (error) {
        return response.error(req, res, error, 400, 'Informacion Invalida')
    }   
    
    return response.success(req, res, token, 200)
}

module.exports = router;