const { Schema, model } = require('mongoose');

const SubtodoSchema = Schema({
  text: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending'
  },
  todo: {
    type: Schema.Types.ObjectId,
    ref: 'Todo',
    required: true
  }
});

SubtodoSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Subtodo', SubtodoSchema);