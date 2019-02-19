const request = require('request');

const get = async () => {
    return new Promise(function (resolve, reject) {
        request(process.env.ORDER_CSV_URL, function (error, res, body) {
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