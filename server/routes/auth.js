const authService = require("../services/auth.js");
const constants = require("../common/constants.js");

function authRoutes(app) {
  app.post(constants.BASE_API_AUTH + "/signup", authService.signup);
}

module.exports = { authRoutes };
