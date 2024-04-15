const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menu.js");

router.get("/", async function (req, res) {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).send(menuItems);
  } catch (error) {
    console.log("Error while fetching Menus", error);
    res.status(500).send(error);
  }
});

router.post("/", async function (req, res) {
  try {
    const menu = req.body;
    const newMenu = new MenuItem(menu);
    const menuResponse = await newMenu.save();
    res.status(200).send({ message: "Menu store Successfully", menuResponse });
  } catch (error) {
    console.log("Error while Storing Menus", error);
    res.status(500).send(error);
  }
});
module.exports = router;
