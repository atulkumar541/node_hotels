const express = require("express");
const router = express.Router();
const Person = require("../models/person.js");

router.post("/", async function (req, res) {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    res.status(200).send({ message: "Person Store successfully", response });
  } catch (error) {
    console.log("Error while store person", error);
    res.status(500).send(error);
  }
});

router.get("/", async function (req, res) {
  try {
    const response = await Person.find();
    res.status(200).send(response);
  } catch (error) {
    console.log("Error while fetching person", error);
    res.status(500).send(error);
  }
});

module.exports = router;
