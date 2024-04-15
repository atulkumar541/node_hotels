const mongoose = require("mongoose");

//URL
const mongoUrl = "mongodb://127.0.0.1:27017/restaurant";

//Mongoose connection
mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to database!");
});
db.on("error", (err) => {
  console.log("Error in database:", err);
});
db.on("disconnected", () => {
  console.log("Database Disconnected!");
});

module.exports = db;
