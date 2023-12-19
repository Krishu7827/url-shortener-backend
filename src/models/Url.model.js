const mongoose = require('mongoose');

/** Url Schema */
const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, unique: true, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    versionKey: false
});

/** Url Model */
const Url = mongoose.model('Url', urlSchema);

/** Exporting Url Model */
module.exports = { Url };
