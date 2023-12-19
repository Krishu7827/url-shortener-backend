
const crypto = require('crypto');
const {Url} = require('../models/Url.model')

/** Function to Generate Unique Short Url */
const generateShortUrl = async() => {
    let shortUrl;
    let isUnique = false;
  
    /** Keep generating until a unique short URL is found **/
    while (!isUnique) {
      const randomBytes = crypto.randomBytes(3);
      shortUrl = randomBytes.toString('hex');
      const existingUrl = await Url.findOne({ shortUrl });
  
      if (!existingUrl) {
        isUnique = true;
      }
    }
  
    return shortUrl;
};

/** Exporting GenerateShortUrl function */
module.exports = {generateShortUrl};
