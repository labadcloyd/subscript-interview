const knex = require("./connection.js");

async function create_org({ org_name }) {
  return await knex("organization")
    .insert({ org_name: org_name })
    .returning("*");
}

module.exports = { create_org };
