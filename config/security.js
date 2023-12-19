
/** Importing Helmet Library to Security  */
const helmet = require('helmet');

const configureSecurity = (app) => {
    /** Using helmet middleware for basic security headers **/
    app.use(helmet());
};

/** Exporting configureSecurity Function to Security */
module.exports = { configureSecurity };
