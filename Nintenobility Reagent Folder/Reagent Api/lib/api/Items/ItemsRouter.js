const express = require("express");
const GetItems = require("./GetItems");
const GetItem = require("./GetItem");
const CreateItem = require("./CreateItem");


var router = express.Router();

router

.get("/", GetItems)
.get("/:itemName", GetItem)
.post("/", CreateItem)





module.exports = {router};