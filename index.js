const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./db/config');

const app = express();
dbConnection();

app.use(cors());

// Directorio Público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));
app.use('/api/subtodos', require('./routes/subtodos'));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
