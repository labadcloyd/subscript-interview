const bcrypt = require("bcrypt");
const saltRounds = 10;
const _ = require("lodash");
const users = require("../database/users.js");
const org = require("../database/organization.js");
const utils = require("../common/utils.js");
const knex = require("../database/connection.js");

async function signup(req, res) {
  let org_name = req.body.org_name,
    username = req.body.username,
    password = req.body.password;

  // todo CHECK PASSWORD SECURITY

  // Start transaction
  knex
    .transaction(async function (trx) {
      const newOrg = await org.create_org({ trx, org_name: org_name });
      // todo Check if newOrg was created

      // todo Check if username or org name already exists

      // Hashing password
      const hash = await bcrypt.hash(password, saltRounds);
      const newUser = await users.create_user({
        trx,
        org_id: newOrg[0].id,
        username: username,
        password: hash,
      });
      return res.json({ newUser });
    })
    .then(function (resp) {
      console.log("Successfully signed up user.");
    })
    .catch(function (err) {
      console.error(err);
    });
}

const toExport = {
  signup: {
    method: signup,
    errorMessage: "Could not sign user up",
  },
};

for (let route in toExport) {
  toExport[route] = utils.addErrorReporting(
    toExport[route].method,
    toExport[route].errorMessage
  );
}

module.exports = toExport;
