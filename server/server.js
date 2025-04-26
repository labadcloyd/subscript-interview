const app = require("./server-config.js");
const routes = require("./routes/todos.js");
const db = require("./database/todo-queries.js");

const port = process.env.PORT || 5000;

routes.todosRoute(app);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
