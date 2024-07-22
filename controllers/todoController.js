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

const getTodoById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "data not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "success get data",
      data: todo,
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

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findByIdAndUpdate(todoId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "data not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "success update data",
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findByIdAndDelete(todoId);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "data not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "success delete data",
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports = { getTodos, getTodoById, createTodo, updateTodo, deleteTodo };
