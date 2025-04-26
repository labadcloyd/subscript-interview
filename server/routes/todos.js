const todoService = require("../services/todos.js");

function todosRoute(app) {
  app.get("/", todoService.getAllTodos);
  app.get("/:id", todoService.getTodo);

  app.post("/", todoService.postTodo);
  app.patch("/:id", todoService.patchTodo);

  app.delete("/", todoService.deleteAllTodos);
  app.delete("/:id", todoService.deleteTodo);
}

module.exports = { todosRoute };
