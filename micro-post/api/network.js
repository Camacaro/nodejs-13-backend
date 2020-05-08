const express = require('express');

const  response = require('../network/response');
const controller = require('./index');

const router = express.Router();

router.get('/', list);  

// Internal function
async function list (req, res, next) {
   controller.list()
   .then(
       data => {
           console.log(process.env.NODE_ENV);
           response.success(req, res, data, 200)
       }
    )
    .catch(next)
}


module.exports = router;