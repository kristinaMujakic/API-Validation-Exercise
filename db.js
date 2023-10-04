/** Database config for database. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

const db = new Client(DB_URI);

db.connect()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });

module.exports = db;
