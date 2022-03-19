//require express
const express = require('express');
//require files for connection and routes
const db = require('./config/connection')
const routes = require('./routes')
//set variables for  PORT = 3001 , app = express()
const PORT = process.env.PORT || 3001;
const app = express();
//app middleware
  // url encoded
  app.use(express.urlencoded({ extended: true }));
  // express.json()
  app.use(express.json());
  //routes
  app.use(routes);

//listen to PORT once db is open

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}`)
  })
});