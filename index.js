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