// const store = require('../../../store/dummy') ;
// const store = require('../../../store/mysql') ;
const config = require('../../../config')

let store, cache;
if(config.remoteDB) {
    console.log('remoteDB');
    store = require('../../../store/remote-mysql') ;
} else {
    console.log('dummy');
    store = require('../../../store/dummy') ;
}

const ctrl = require('./controller');
cache = require('../../../store/remote-cache');

module.exports = ctrl(store, cache);