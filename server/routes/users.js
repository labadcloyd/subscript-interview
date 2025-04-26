const authService = require("../services/auth.js");
const constants = require("../common/constants.js");

function authRoutes(app) {
  app.get(constants.BASE_API_AUTH + "/", authService.getAllTodos);
  app.get(constants.BASE_API_AUTH + "/:id", authService.getTodo);

  app.post(constants.BASE_API_AUTH + "/", authService.postTodo);
  app.patch(constants.BASE_API_AUTH + "/:id", authService.patchTodo);

  app.delete(constants.BASE_API_AUTH + "/", authService.deleteAllTodos);
  app.delete(constants.BASE_API_AUTH + "/:id", authService.deleteTodo);
}

module.exports = { authRoutes };
