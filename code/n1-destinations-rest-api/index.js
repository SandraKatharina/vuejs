const express = require("express");
const app = express();

const cors = require("cors");

const port = 3000;

const db = require("./db");

app.use(cors());

app.get("/allDestinations", async function (req, res) {
  const destinationsList = await db.getAllDestinations();
  res.json({
    status: "ok",
    count: destinationsList.length,
    results: destinationsList,
  });
});

app.get("/allDestinations/:id", async function (req, res) {
  const id = parseInt(req.params.id);
  const destination = await db.getDestinationById(id);
  res.json({
    status: "ok",
    destination: destination,
  });
});

app.delete("/allDestinations/:id", async function (req, res) {
  const id = parseInt(req.params.id);
  const destinationToDelete = await db.deleteDestinationById(id);
  res.json({
    status: "deleted",
    destination: destinationToDelete,
  });
});

app.post("/allDestinations/addDestination", async function (req, res) {
  const { name, longitude, latitude, country_code } = req.body;
  console.log(req.body);
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
