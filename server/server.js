import express from 'express'
const PORT = process.env.PORT || 8080;
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from './App';

// Data Models
import eventsData from './models/events.json';
import ministriesData from './models/ministries.json';

const app = express();

// app.use(express.static("../build"))

/* == React SSR Section == */

/* let reactAppComponent = renderToString(<App />);

let index = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/assets/mudikalogo-fire.png">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />   
    <title>Mudika Vancouver</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">${reactAppComponent}</div>
    <div id="floating-button-root"></div>
    <!-- TODO: fix the bundle.js import -->
    <script type="text/javascript" src="static/bundle.js"></script>
  </body>
</html>` */

/* app.get('/', (req, res) => {
  // The send method below may require EJS view engine to pass the <App> React Component
  // res.send(indexHtml);
  res.send(index);
}) */

/* == End of React SSR Section == */

//-----------------------------------

/* == React - Node Backend API == */

/* ROUTES */

// GET Events Data
app.get('/events', (req,res) => {
  res.send(eventsData);
});

// GET Ministries Data
app.get('/ministries', (req, res ) => {
  res.send(ministriesData);
});

/* == End of React - Node Backend API == */

app.listen(PORT, () => {
  console.log("Mudika Server is running on PORT", PORT);
});