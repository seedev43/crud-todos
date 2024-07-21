const express = require("express");
const { getTodos, createTodo } = require("../controllers/todoController");

const router = express.Router();

router.get("/get-todos", getTodos);
router.post("/add-todo", createTodo);

module.exports = router;
