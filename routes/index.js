const express = require("express");
const {
  getTodos,
  createTodo,
  getTodoById,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/get-todos", getTodos);
router.get("/get-todo/:id", getTodoById);
router.patch("/update-todo/:id", updateTodo);
router.post("/add-todo", createTodo);

module.exports = router;
