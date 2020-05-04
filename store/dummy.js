const db = {
    user: [
        {id: '1', name: 'Jesus'}
    ]
};

async function list(tabla) {
    return db[tabla] || []
}

async function get(tabla, id) {
    let collection = await list(tabla)
    const item = collection.filter( item => item.id == id)[0] || null;
    return item
}

async function upsert(tabla, data) {
    
    if(!db[tabla]) {
        db[tabla] = []
    }

    db[tabla].push(data)
}

async function remove(tabla, id) {
    return true
}

async function query(tabla, q) {
    let collection = await list(tabla)
    
    let keys = Object.keys(q)
    let key = keys[0]

    const item = collection.filter( item => item[ key ] == q[ key ] )[0] || null;
    return item;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
}