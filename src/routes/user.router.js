
const express = require('express');
const {loginUser,registerUser} = require('../controllers/user.controller');

const UserRouter = express.Router();

/** Register a new user **/
UserRouter.post('/register',registerUser);

/** Login user **/
UserRouter.post('/login', loginUser);

/** Exporting User Router */
module.exports = {UserRouter};
