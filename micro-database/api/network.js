const express = require('express');

const response = require('../network/response');
const Store = require('./store');

const router = express.Router();

router.get('/:tabla', list)
router.get('/:tabla/:id', get)
// router.post('/:tabla', insert)
router.post('/query/:tabla/', query)
router.post('/:tabla', upsert)

async function list (req, res, next) {  
    const datos = await Store.list(req.params.tabla)  
    response.success(req, res, datos, 200)
}

async function get (req, res, next) {  
    const datos = await Store.get(req.params.tabla, req.params.id)  
    response.success(req, res, datos, 200)
}

async function insert (req, res, next) {  
    const datos = await Store.insert(req.params.tabla, req.body)  
    response.success(req, res, datos, 200)
}

async function upsert (req, res, next) {  
    const datos = await Store.upsert(req.params.tabla, req.body)  
    response.success(req, res, datos, 200)
}

async function query (req, res, next) {  
    const datos = await Store.query(req.params.tabla, req.body.query , req.body.join) 
    response.success(req, res, datos, 200)
}

module.exports = router