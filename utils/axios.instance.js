const axios = require('axios');

class AxiosInstance {
    
    constructor(config = {}) {
        this.axios = axios.create(config);
    }

    send(url, method, data) {
        return new Promise((resolve, reject) => {
            console.log('entro al send');
            this.axios({
                method,
                url,
                data
            })
                .then(response => {
                    console.log('entro al then');
                    console.log('data', response);
                    resolve(response.data)
                })
                .catch(error => reject(error))
        })
    }
}

module.exports = AxiosInstance;