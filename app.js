const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const USERS_API = 'https://api-books-ac3j.onrender.com/users';
const BOOKS_API = 'https://api-books-ac3j.onrender.com/books';

// GET /users
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(USERS_API);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// GET /books
app.get('/books', async (req, res) => {
  try {
    const response = await axios.get(BOOKS_API);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener libros' });
  }
});

app.listen(3000, () => {
  console.log('Servidor backend escuchando en http://localhost:3000');
});