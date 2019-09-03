const $config = require('../config/index');
const axios = require('axios');
class SafeRequest {
    constructor(url) {
        this.url = $config.baseUrl + url;
    }
    /**
     * @param params
     */
    get(params={}) {
        return new Promise((resolve, reject) => {
            axios.get(this.url, {
                params
            })
                .then((response) => {
                    const data = response.data;
                    resolve(data);
                })
                .catch(function (error) {
                    // handle error
                    reject(error);
                })
                .finally(function () {
                    // always executed
                });
        })
    }
}
module.exports = SafeRequest;