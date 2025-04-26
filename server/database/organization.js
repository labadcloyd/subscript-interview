const knex = require("./connection.js");

async function create_org({ trx, org_name }) {
  return await knex("organization")
    .transacting(trx)
    .insert({ org_name: org_name })
    .returning("*");
}

module.exports = { create_org };
