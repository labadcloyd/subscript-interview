const app = require("./server-config.js");
const todoRoutes = require("./routes/todos.js");
const authRoutes = require("./routes/auth.js");
const db = require("./database/todo-queries.js");
const express = require("express");

const port = process.env.PORT || 5000;

todoRoutes.todosRoute(app);
authRoutes.authRoutes(app);
app.use(express.json());
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
