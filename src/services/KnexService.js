const cfg = require('./../config/knex-cfg');
const knex = require('knex')(cfg.pg);

const connectionRelease = async() => {
    await knex.destroy();
}

module.exports = {
    knex,
    connectionRelease
}