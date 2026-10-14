
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

const DB_USER = 'root';
const DB_PASSWORD = 'root';
const DB_PORT = 27017;
const DB_HOST = 'mongo';
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`

mongoose
  .connect(URI)
  .then(()=>console.log('connect to DB'))
  .catch((err)=> console.log('failed to connect to DB:',err))

app.use(express.static(path.join(__dirname, "dist")));

app.listen(PORT, () => {
  console.log(`Application disponible sur http://localhost:${PORT}`);
});




