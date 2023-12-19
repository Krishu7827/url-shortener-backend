/** Importing Mongoose  */
const mongoose = require('mongoose');

/** Function to Connect Database */
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        /** Error Handling Response **/
        console.error('Error connecting to MongoDB:', error.message);

    }
};

/** Exporting Function */
module.exports = { connectDB };
