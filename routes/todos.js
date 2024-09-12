const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todos');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.use(validarJWT);

router.get('/', getTodos);

router.post(
  '/',
  [
    check('text', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
  ],
  createTodo
);

router.put(
  '/:id',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
  ],
  updateTodo
);

router.delete('/:id', deleteTodo);

module.exports = router;
