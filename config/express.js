/** Importing Express and Cors **/
const express = require('express');

const cors = require('cors');

const app = express();

/** Middleware **/
app.use(cors());
app.use(express.json())

/** Exporting Express App */
module.exports = { app };
