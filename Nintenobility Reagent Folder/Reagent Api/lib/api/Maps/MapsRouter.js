const express = require("express");
const areas = require("./Areas/AreasRouter");
const GetMaps = require("./GetMaps");
const GetMap = require("./GetMap");
const CreateMap = require("./CreateMap");
const UpdateMap = require("./UpdateMap");
const Informant = require("../../Informant");

var router = express.Router();

router

.use("/:mapId/areas", areas.router)
.get("/", GetMaps)
.get("/:mapId", GetMap)
.post("/", CreateMap)
.put("/:mapId", UpdateMap)





module.exports = {router};