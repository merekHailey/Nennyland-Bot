const express = require("express");
const GetDuels = require("./GetDuels");
const CreateDuel = require("./CreateDuel");
const GetDuel = require("./GetDuel");
const UpdateDuel = require("./UpdateDuel");
const DeleteDuel = require("./DeleteDuel");

var router = express.Router();

router
.get("/duels", GetDuels)
.post("/duels", CreateDuel)
.get("/duels:duelId", GetDuel)
.put("duels:duelId", UpdateDuel)
.delete("/duels:duelId", DeleteDuel)


module.exports = {router};