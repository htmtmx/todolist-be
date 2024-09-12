const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getSubtodos,
  getSubtodosByTodo,
  createSubtodo,
  //updateSubtodo, deleteSubtodo
} = require('../controllers/subtodos');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.use(validarJWT);

router.get('/', getSubtodos);

router.get('/:id', getSubtodosByTodo);

router.post('/new',
  [
    check('text', 'El nombre es obligatorio').not().isEmpty(),
    check('todo', 'El todo es obligatorio').not().isEmpty(),
    validarCampos
  ],
  createSubtodo
);

module.exports = router;