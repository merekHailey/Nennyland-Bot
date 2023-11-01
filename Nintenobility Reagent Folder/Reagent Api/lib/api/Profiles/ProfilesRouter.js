const express = require("express");
const GetProfile = require("./GetProfile");
const GetProfiles = require("./GetProfiles");
const CreateProfile = require("./CreateProfile");
const UpdateProfile = require("./UpdateProfile");
const DeleteProfile = require("./DeleteProfile");
const Informant = require("../../Informant");

var router = express.Router();
router
.get("/:profileId", GetProfile)
.get("/", GetProfiles)
.post("/", CreateProfile)
.put("/:profileId", UpdateProfile)
.delete("/:profileId", DeleteProfile)


module.exports = {router};