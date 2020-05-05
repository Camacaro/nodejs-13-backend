const AxiosInstance = require('../utils/axios.instance');
const config = require('../config');

class MysqlRemote {
    constructor() {
        this.request = new AxiosInstance({
            baseURL: `${config.mysqlService.host}:${config.mysqlService.port}`,
            timeout: 5000,
            headers: {'Content-Type': 'application/json'},
        })
    }

    async list(table) {
        console.log(table);
        const resultados = await this.request.send(`/${table}`, 'GET');
        console.log('los surpues', resultados);
        return resultados
    }
}

module.exports = new MysqlRemote();