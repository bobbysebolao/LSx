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
    base("Success Stories")
      .select()
      .eachPage(
        function page(records) {
          let result = [];
          records.forEach((record) => {
              result.push(record.fields);
          });
          resolve(result);
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
          }
        }
      );
  });
};

module.exports = getSuccessStories;
