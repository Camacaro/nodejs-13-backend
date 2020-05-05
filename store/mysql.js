
const mysql = require('mysql')

const config = require('../config')

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

// Conexion
let connection;

function handleCon() {
    connection = mysql.createConnection(dbconf)

    connection.connect( (err) => {
        if( err ){
            console.error('[db err]', err);
            setTimeout(handleCon, 2000)
        } else {
            console.log('DB connected!');
        }
    } )

    connection.on('error', err => {
        console.error('[db err]', err);
        
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            setTimeout(handleCon, 2000)
        } else {
            throw err
        }
    })
}

handleCon();

function list (table) {
    return new Promise ( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, data) => {
            
            if(error) return reject(error)

            resolve(data)
        })
    })
}

function get (table, id) {
    return new Promise ( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id = ${id}`, (error, data) => {
            
            if(error) return reject(error)

            resolve(data)
        })
    })
}

function insert (table, data) {
    return new Promise ( (resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (error, result) => {
            
            if(error) return reject(error)

            resolve(result)
        })
    })
}

function update (table, data) {
    return new Promise ( (resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, data.id], (error, result) => {
            
            if(error) return reject(error)

            resolve(result)
        })
    })
}

function query (tabla, query, join) {  
    
    let joinQuery = ''
    if(join) {
        const key = Object.keys(join)[0]
        const val = join[key]
        joinQuery = `JOIN ${key} ON ${tabla}.${val} = ${key}.id`
    }

    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla} ${joinQuery} WHERE ?`, query, (error, res) => {       
            if(error) return reject(error)
            resolve(res[0] ? {...res[0]} : null)
        })
    })
}

async function upsert (table, data) {

    // revisar esto, lo tome de un comentario porqeu no seria esto
    // segun los mismo comentarios 
    // const resultado = await get(table, data.id)
    // resultado.length > 0
    //  data && data.id
    if( data && data.id ) {
        return update(table, data)
    } else {
        return insert(table, data)
    }
}

module.exports = {
    list,
    get,
    upsert,
    query,
}