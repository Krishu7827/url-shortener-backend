/** Importing Url Model and GenerateShorUrl Function **/
const { Url } = require('../models/Url.model');
const { generateShortUrl } = require('../utils/shortener');


/** Controller to make Short Url and Save into the Database */
const shortenUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;

        /** Checking Original Url already exists in Database or Not */
        const isOriginalUrl = await Url.findOne({ originalUrl: originalUrl });

        if (!isOriginalUrl) {
            /** Generating Unique Url **/
            const shortUrl = await generateShortUrl();

            /** Storing Shortened and Original Url into Database */
            const url = new Url({
                originalUrl,
                shortUrl,
                user: req.body.userID
            });

            await url.save();

            /** Sending Response with Original Url and Shortened Url */
            res.status(201).json({
                originalUrl: url.originalUrl,
                shortUrl: `https://url-shortener-nfk1.onrender.com/api/url/${url.shortUrl}`,
            });

        } else {

            /** Sending Response with Original Url and Shortened Url for already Exists Original Url */
            res.status(201).json({
                originalUrl: isOriginalUrl.originalUrl,
                shortUrl: `https://url-shortener-nfk1.onrender.com/api/url/${isOriginalUrl.shortUrl}`,
            });

        }
    } catch (error) {
        /** Error Handling Response **/
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/** Controller for redirect to original Url(Unirvsal resource locator) */
const getOriginalUrl = async (req, res) => {
    try {

        const { shortUrl } = req.params;
        const url = await Url.findOne({ shortUrl });

        /** Checking Shortened Url is available in Database or not to Get Original Url */
        if (!url) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        /** redirect to Original Url */
        res.redirect(url.originalUrl);
    } catch (error) {
        /** Error Handling Response **/
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/** Exporting Controllers **/
module.exports = {
    shortenUrl,
    getOriginalUrl,
};
