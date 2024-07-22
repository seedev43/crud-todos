const { mongo } = require("../config/database");

const todoSchema = new mongo.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    dueDate: {
      type: Date,
      required: false,
      default: null,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Todo = mongo.model("Todo", todoSchema);

module.exports = Todo;
