import express from 'express'
const PORT = process.env.PORT || 8080;
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
// import html from './html';
const app = express();

app.use(express.static('../build'));
// app.use(express.static('static'));

let index = fs.readFileSync('index.html', 'utf-8');

let reactAppComponent = renderToString(<App />);

// Embed React App Component into the index.html
// let initialHTML = html(reactAppComponent, bundle);

app.get('/', (req, res) => {
  res.send(index);
})

app.listen(PORT, () => {
  console.log("Mudika Server is running on PORT", PORT);
})

// TODO: review the bundle.js import and how the index.html is imported