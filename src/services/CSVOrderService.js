const request = require('request');

const ORDER_CSV_URL = 'http://www.mocky.io/v2/5c68d910370000e30407fcc9';

const get = async () => {
    return new Promise(function (resolve, reject) {
        request(ORDER_CSV_URL, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
};

module.exports = {
    get
}