const { knex } = require('./KnexService');

const get = async (id) => {
    return await knex("customers").where({customerid: id});
}

module.exports = {
    get,
}