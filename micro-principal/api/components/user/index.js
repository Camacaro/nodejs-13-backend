// const store = require('../../../store/dummy') ;
// const store = require('../../../store/mysql') ;
const config = require('../../../config')

let store;
if(config.remoteDB) {
    store = require('../../../store/remote-mysql') ;
} else {
    store = require('../../../store/dummy') ;
}

const ctrl = require('./controller');

module.exports = ctrl(store);