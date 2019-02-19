const { knex } = require('./KnexService');

const insert = async (order) => {
    return await knex("orders").insert(order);
};

const get = async (orderId) => {
    return await knex("orders").where({orderid: orderId});
};

module.exports = {
    insert,
    get
}