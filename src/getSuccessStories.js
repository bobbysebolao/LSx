require("env2")("./config.env");
const Airtable = require('airtable');

if (!process.env.API_KEY || !process.env.BASE_KEY) {
    throw new Error('Error API_KEY and BASE_KEY should be set');
}

const apiKey = process.env.API_KEY;
const baseKey = process.env.BASE_KEY;

const base = new Airtable({ apiKey }).base(baseKey);

const getSuccessStories = () => { 
    base('Success Stories').find('recYlANb7d91uIwd8', function(err, record) {
        if (err) { console.error(err); return; }
        console.log(record._rawJson);
    });
} 

module.exports = getSuccessStories;