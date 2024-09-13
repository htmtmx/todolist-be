const { response } = require('express');
const Todo = require('../models/Todo');

const getTodos = async (req, res = response) => {

  const todos = await Todo.find()
    .populate('user', 'name');

  res.json({
    ok: true,
    todos
  });
}

const createTodo = async (req, res = response) => {

  const todo = new Todo(req.body);

  try {

    todo.user = req.uid;
    const todoSaved = await todo.save();

    res.json({
      ok: true,
      todo: todoSaved
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }
}

const updateTodo = async (req, res = response) => {

  const todoId = req.params.id;
  const uid = req.uid;

  try {

    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(404).json({
        ok: false,
        msg: 'Todo no encontrado por id'
      });
    }
    if (todo.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este todo'
      });
    }

    const newTodo = {
      ...req.body,
      user: uid
    }

    const todoUpdated = await Todo.findByIdAndUpdate(todoId, newTodo, { new: true });

    res.json({
      ok: true,
      todo: todoUpdated
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }
}

const deleteTodo = async (req, res = response) => {

  const todoId = req.params.id;
  // Todo: validation to delete todo only if user is the same
  // const uid = req.uid;

  try {

    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(404).json({
        ok: false,
        msg: 'Todo no encontrado por id'
      });
    }

    // Todo: validation to delete todo only if user is the same
    // if (todo.user.toString() !== uid) {
    //   return res.status(401).json({
    //     ok: false,
    //     msg: 'No tiene privilegio de eliminar este todo'
    //   });
    // }

    await Todo.findByIdAndDelete(todoId);

    res.json({
      ok: true,
      msg: 'Todo eliminado'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
}