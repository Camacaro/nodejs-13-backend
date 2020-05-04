const express = require('express');

const secure = require('./secure')
const  response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

router.get('/', list);  
router.get('/:id', get);  
router.post('/', upsert);  
router.put('/', secure('update'), upsert);  

// Internal function
async function list (req, res, next) {
    let list;
    
    try {
        list = await controller.list();
    } catch (error) {
        // con esto se ejecutara el error que menejamos en el index
        next()
        // return response.error(req, res, error, 500)
    }   
    
    return response.success(req, res, list, 200)
}

async function get (req, res) {
    let user;
    
    try {
        user = await controller.get(req.params.id);
    } catch (error) {
        return response.error(req, res, error, 500)
    }   
    
    return response.success(req, res, user, 200)
}

async function upsert (req, res) {  
    let user;
    
    try {
        user = await controller.upsert(req.body);
    } catch (error) {
        return response.error(req, res, error, 500)
    }   
    
    return response.success(req, res, user, 201)
}


module.exports = router;