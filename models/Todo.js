const { Schema, model } = require('mongoose');

const TodoSchema = Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  status: {
    type: String,
    default: 'pending'
  },
  subtodos: {
    type: [Schema.Types.ObjectId],
    ref: 'Subtodos',
    default: []
  },
  comments: {
    type: [Schema.Types.ObjectId],
    ref: 'Comments',
    default: []
  },

});

TodoSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Todo', TodoSchema);