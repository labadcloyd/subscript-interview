const knex = require("./connection.js");

// PASSWORDS SHOULD BE HASHED WHEN PASSED AS A PARAM
async function create_user({ org_id, username, password }) {
  return await knex("users").insert({
    org_id: org_id,
    username: username,
    password: password,
  });
}

async function get_user({ user_id }) {
  return await knex
    .select("user_id", "org_id", "username")
    .where({ user_id: user_id })
    .from("users");
}

module.exports = { create_user, get_user };
