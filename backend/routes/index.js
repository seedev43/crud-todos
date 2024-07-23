const express = require("express");
const {
  getTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController.js");

const router = express.Router();

router.get("/get-todos", getTodos);
router.get("/get-todo/:id", getTodoById);
router.post("/add-todo", createTodo);
router.patch("/update-todo/:id", updateTodo);
router.delete("/delete-todo/:id", deleteTodo);

module.exports = router;
