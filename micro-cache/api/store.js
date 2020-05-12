

const redis = require('redis')

const config = require('../config')

const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
});


function list (table) {
    return new Promise ( (resolve, reject) => {
        client.get(table, (err, data) => {
            if(err){
                return reject(err)
            }
            
            let res = data || null
            if(data) {
                res = JSON.parse(data)
            }
            return resolve(res);
        })
    })
}

function get (table, id) {
    const search = `${table}_${id}`;
    return list(search);
}


// temgp que separar estas
async function upsert (table, data) {
    
    let key = table;

    if(data && data.id) {
        key = key + '_'  + data.id
    }

    // console.log('upsert', data);
    // console.log('table', table);
    // console.log('key', key);
    // una set con expiration, 10 segundos
    client.setex(key, 10, JSON.stringify(data));

    return true;
}

module.exports = {
    list,
    get,
    upsert,
}