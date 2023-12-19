const mongoose = require('mongoose');

/** User Schema */
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
}, {
    versionKey: false
});


/** User Model */
const User = mongoose.model('User', userSchema);

/** Exporting User Model */
module.exports = { User };
