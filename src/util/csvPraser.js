const csvParse = require('csv-parse');


const parse = async (csvData) => {
    return new Promise(function (resolve, reject) {
        const output = []
        csvParse(csvData, {
            trim: true,
            skip_empty_lines: true
        })
        // Use the readable stream api
            .on('readable', function () {
                let record
                while (record = this.read()) {
                    output.push(record)
                }
            })
            // When we are done, test that the parsed output matched what expected
            .on('end', () => {
                //console.log(output);
                resolve(output);

            }).on('error', (e) => {
                reject(e);
        })
    });
};

module.exports = {
    parse
};