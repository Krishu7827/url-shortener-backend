/** Configuration to get Environment Variable */
require('dotenv').config()

/** Importing all configurations and routers */
const {app} = require('./config/express')
const {connectDB} = require('./config/db')
const {configureSecurity} = require("./config/security")
const {UserRouter} = require("./src/routes/user.router")
const {Urlrouter} = require('./src/routes/Url.router')

/** Connect to DB */
connectDB()

/** Apply Security configuration */
configureSecurity(app)


/************* routes ***************/

/** route for User */
app.use("/api/user",UserRouter)

/** route for shorten Url */
app.use('/api/url',Urlrouter)


/**  Start the server **/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

