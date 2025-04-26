const todoService = require("../services/todos.js");
const constants = require("../common/constants.js");

function todosRoute(app) {
  app.get(constants.BASE_API_TODOS + "/", todoService.getAllTodos);
  app.get(constants.BASE_API_TODOS + "/:id", todoService.getTodo);

  app.post(constants.BASE_API_TODOS + "/", todoService.postTodo);
  app.patch(constants.BASE_API_TODOS + "/:id", todoService.patchTodo);

  app.delete(constants.BASE_API_TODOS + "/", todoService.deleteAllTodos);
  app.delete(constants.BASE_API_TODOS + "/:id", todoService.deleteTodo);
}

module.exports = { todosRoute };
