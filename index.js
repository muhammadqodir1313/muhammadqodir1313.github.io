const express = require('express');
const cors = require('cors');
const app = express();

// CORS sozlamalari
app.use(cors({
    origin: ['https://muhammadqodir1313.github.io', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Accept']
}));

fetch('https://backend-3l6p.onrender.com/api/users')