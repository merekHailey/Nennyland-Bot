const express = require("express");
const GetQuest = require("./GetQuest");
const UpdateQuest = require("./UpdateQuest");
const CreateQuest = require("./CreateQuest");
const DeleteQuest = require("./DeleteQuest");

var router = express.Router();

router
.get("/quest", GetQuest)
.put("/quest", UpdateQuest)
.post("/quest", CreateQuest)
.delete("/quest", DeleteQuest)


module.exports = {router};