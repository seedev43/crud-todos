const Todo = require("../models/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    return res.status(200).json({
      success: true,
      message: "success get all data",
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);

    await todo.save();

    return res.status(201).json({
      success: true,
      message: "success add data",
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports = { getTodos, createTodo };
