const db = {
    user: [
        {id: '1', name: 'Jesus'}
    ]
};

async function list(tabla) {
    return db[tabla]
}

async function get(tabla, id) {
    let collection = await list(tabla)
    const item = collection.filter( item => item.id == id)[0] || null;
    return item
}

async function upsert(tabla, data) {
    db[tabla].push(data)
}

async function remove(tabla, id) {
    return true
}

module.exports = {
    list,
    get,
    upsert,
    remove,
}