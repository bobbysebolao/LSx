require("env2")("./.env");
const Airtable = require("airtable");

if (!process.env.API_KEY || !process.env.BASE_KEY) {
  throw new Error("Error API_KEY and BASE_KEY should be set");
}

const apiKey = process.env.API_KEY;
const baseKey = process.env.BASE_KEY;

const base = new Airtable({ apiKey }).base(baseKey);

const getSuccessStories = () => {
  return new Promise((resolve, reject) => {
    base("Success Stories").find("recYlANb7d91uIwd8", function(err, record) {
      if (err) {
        reject(err);
      }
      resolve(record._rawJson);
    });
  });
};

module.exports = getSuccessStories;
