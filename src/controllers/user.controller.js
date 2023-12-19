/** Importing JWT,Bcrypt and User Model **/
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/user.model');
require('dotenv').config()


/** Controller to Register for Users */
const registerUser = async (req, res) => {

    try {
        const { username, password } = req.body;

        /** Storing User data into Database */
        const user = new User({ username, password });

        /** Hash the password before saving **/
        user.password = await bcrypt.hash(user.password, 10);

        await user.save();

        /** Sending Success response  */
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        /** Error Handling Response **/
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/** Controller to Login for Users */
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        /** Comparing b/w Plan PassWord and Hashed Password **/
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        /** Generate JWT token **/
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h', /** Token expiration time **/
        });

        /** Sending Response with JWT token */
        res.json({ token, message: 'Login successful' });
    } catch (error) {
        /** Error Handling Response **/
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


/** Exporting Controllers **/
module.exports = {
    loginUser, registerUser
};
