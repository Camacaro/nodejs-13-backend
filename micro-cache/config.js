
module.exports = {
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'C07BE3P7yb',
        password: process.env.MYSQL_PASSWORD || 'v9oMIoxyFX',
        database: process.env.MYSQL_DB || 'C07BE3P7yb',
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || 'localhost',
        port: process.env.CACHE_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-13093.c8.us-east-1-4.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '13093',
        password: process.env.REDIS_PASSWORD || 'ivKjd54OlngILab6fTtxLecQ3ODZY8zA',
    }
}

// Username: 

// Database name: 

// Password: 

// Server: 

// Port: 3306