const express = require("express");
const GetAreas = require("./GetAreas");
const CreateArea = require("./CreateArea");
const GetArea = require("./GetArea");
const UpdateArea = require("./UpdateArea");
const DeleteArea = require("./DeleteArea");
const Informant = require("../../../Informant");


var router = express.Router();

router

.get("/", GetAreas)
.post('/', CreateArea)
.get("/:areaId", GetArea)
.put("/:areaId", UpdateArea)
.delete("/:areaId", DeleteArea)



module.exports = {router}