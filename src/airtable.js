var Airtable = require("airtable");
var base = new Airtable({ apiKey: "$AIRTABLE_API_KEY" }).base(
  "appEnu5dkFYaUlJ3m"
);

export async function handler(event, context) {
  return base("table1")
    .find("recuIMrbTUNudkzxC")
    .then(record => {
      console.log(record);
      return { statusCode: 200, body: record.id };
    })
    .catch(err => {
      return { statusCode: err.statusCode, body: err.message };
    });
}
