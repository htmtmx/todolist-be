const { Schema, model } = require('mongoose');

const CommentSchema = Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  todo: {
    type: Schema.Types.ObjectId,
    ref: 'Todo',
    required: true
  }
});

CommentSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Comment', CommentSchema);
