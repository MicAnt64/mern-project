import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
// Need to add .js when importing files.
import connectDB from './config/db.js';
// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running....!');
});

app.use('/api/products', productRoutes);

// For 404 Errors
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
