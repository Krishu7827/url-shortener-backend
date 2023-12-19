
const jwt = require('jsonwebtoken');
require('dotenv').config()

/** Authentication Middleware Function */
const authMiddleware = async (req, res, next) => {
    try {

        /** Extract the token from the Authorization header **/
        const token = req.headers.authorization

        /** Verify the token **/
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        /** Attach the user object to the request for later use **/
        req.body.userID = decoded.userId;
        next();
    } catch (error) {
        /** Error Handling Response **/
        res.status(401).json({ error: 'Unauthorized' });
    }
};

/** Exporting authentication Middleware */
module.exports = { authMiddleware };
