const config = require('../config');
const Informant = require('../Informant');

const express = require("express");
const items = require('./Items/itemsRouter');
const profiles = require('./Profiles/ProfilesRouter');
const maps = require('./Maps/MapsRouter');
const duels = require('./Duels/DuelsRouter');
const quest = require('./Quest/QuestRouter');
var router = express.Router();

router

.use("/", (req, res, next) => {res.header("Access-Control-Allow-Origin", `${config.clientSchema}${config.clientHost}:${config.clientPort}`); next()})

.use("/profiles", profiles.router)

.use("/duels", duels.router)

.use("/quest", quest.router)

.use("/maps", maps.router)

.use("/items", items.router)





module.exports = {router};

