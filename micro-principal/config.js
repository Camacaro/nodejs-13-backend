
module.exports = {
    remoteDB: process.env.REMOTE_DB || true,
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'C07BE3P7yb',
        password: process.env.MYSQL_PASSWORD || 'v9oMIoxyFX',
        database: process.env.MYSQL_DB || 'C07BE3P7yb',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || 'localhost',
        port: process.env.CACHE_SRV_PORT || 3003,
    }
}

// Username: 

// Database name: 

// Password: 

// Server: 

// Port: 3306