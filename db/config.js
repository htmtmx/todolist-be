const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
    throw new Error('Error connecting to MongoDB');
  }
}

module.exports = { dbConnection };