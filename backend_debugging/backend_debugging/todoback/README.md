Cannot find module '../db' 
solution : require("./db"); in index file
Cannot find module 'mongoose'
solution: npm i mongoose
Cannot find module './../../db/models/todos'
solution :const todoModel = require("./../../db/models/todo");
Cannot find module 'mongose'
solution: const mongoose = require("mongoose");
mongoose.module is not a function
solution:const todoModel = mongoose.model("Todo", todoSchema);
Route.get() requires a callback function but got a [object Undefined]
solution : module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
};
Route.put() requires a callback function but got a [object Undefined]
solution :module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  updateTodo,
  deleteTodo,
};//exports updateTodo
morgan is not defined
solution:const morgan=require("morgan");
listen EACCES: permission denied 4000;
solution:PORT=4000 //remove ; after port value

createTodo
solution:task: { type: String, required: true },
const newTodo = new todoModel({
    task:todo,
  });