const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "living_in_a_blog",
});

async function getAllDestinations() {
  const result = await connection.promise().query("SELECT * FROM cities");
  const rows = result[0];
  return rows;
}

async function getDestinationById(id) {
  const result = await connection
    .promise()
    .query("SELECT * FROM cities WHERE id = " + id);

  const rows = result[0];
  const destination = rows[0];

  return destination;
}

async function getDestinationByName(name) {
  const result = await connection
    .promise()
    .query("SELECT * FROM cities WHERE name = " + name);

  const rows = result[0];
  const destinationByName = rows[0];

  return destinationByName;
}

async function deleteDestinationById(id) {
  const result = await connection
    .promise()
    .query("DELETE FROM cities WHERE id = " + id);

  const rows = result[0];
  const destinationToDelete = rows[0];

  return destinationToDelete;
}

async function addDestination() {
  const result = await connection
    .promise()
    .query(
      `INSERT INTO cities (name, longitude, latitude, country_code) Values("Frankfurt", 9, 50, "DEU")`
    );
  const destinationToAdd = result;
  return destinationToAdd;
}

module.exports = {
  getAllDestinations,
  getDestinationById,
  getDestinationByName,
  deleteDestinationById,
  addDestination,
};
