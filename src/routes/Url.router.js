const express = require('express');
const {shortenUrl,getOriginalUrl} = require('../controllers/Url.controller');
const {authMiddleware} = require('../middleware/authentication')
const Urlrouter = express.Router();




/** Shorten a URL **/
Urlrouter.post('/shorten', authMiddleware /** Middleware for authorization **/, shortenUrl);

/** Redirect to the original URL **/
Urlrouter.get('/:shortUrl', getOriginalUrl);

/** Exporting Url Router */
module.exports = {Urlrouter};
