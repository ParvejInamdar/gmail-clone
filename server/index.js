import express from 'express';  // to use this ES6 syntax we need to add "type"="module" in package.json
import dbConnect from './database/database.js';
import routes from './routes/route.js';
import cors from 'cors';

// const express = require('express');       In previous version we are using this syntax 
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());
app.use('/', routes);

const PORT = 5000;

dbConnect();

app.listen(PORT, () => {
    console.log("Server is started on Port", PORT)
})
