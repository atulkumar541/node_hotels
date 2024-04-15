const express = require("express");
const app = express();
const db = require("./config/db.js");

const personRoute = require("./routes/personRoutes.js");
const menuRoute = require("./routes/menuRoutes.js");

const bodyParser = require("body-parser");
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to node js learning");
});

app.use("/person", personRoute);
app.use("/menu", menuRoute);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

//adding comment to test
