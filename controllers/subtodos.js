const { response } = require('express');
const Subtodo = require('../models/Subtodo');

const getSubtodos = async (req, res = response) => {
  
    const subtodos = await Subtodo.find()
      .populate('todo', 'text');
  
    res.json({
      ok: true,
      subtodos
    });
}

const getSubtodosByTodo = async (req, res = response) => {
  
    const todoId = req.params.id;
  
    const subtodos = await Subtodo.find({ todo: todoId });
  
    res.json({
      ok: true,
      subtodos
    });
}

const createSubtodo = async (req, res = response) => {
  
    const subtodo = new Subtodo(req.body);
  
    try {
  
      const subtodoSaved = await subtodo.save();
  
      res.json({
        ok: true,
        subtodo: subtodoSaved
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
  getSubtodos,
  getSubtodosByTodo,
  createSubtodo
}