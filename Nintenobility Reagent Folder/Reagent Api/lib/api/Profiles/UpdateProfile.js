const Informant = require("../../Informant")


function UpdateProfile(req, res){

    Informant.http("UpdateProfile")
    req.body.profile.save();
    res.send(req.body.profile);
}

module.exports = UpdateProfile