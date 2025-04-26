const _ = require("lodash");
const users = require("../database/users.js");
const org = require("../database/organization.js");
const utils = require("../common/utils.js");

function signup(req, data) {
  const protocol = req.protocol,
    host = req.get("host"),
    username = data.username,
    password = data.password;

  return {
    title: data.title,
    order: data.order,
    completed: data.completed || false,
    url: `${protocol}://${host}/${id}`,
  };
}

function addErrorReporting(func, message) {
  return async function (req, res) {
    try {
      return await func(req, res);
    } catch (err) {
      console.log(`${message} caused by: ${err}`);

      // Not always 500, but for simplicity's sake.
      res.status(500).send(`Opps! ${message}.`);
    }
  };
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
