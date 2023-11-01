const Informant = require("../../Informant")


function DeleteProfile(req, res){
    Informant.http("DeleteProfile")
    req.body.profile.deleteOne();
    res.send(req.body.profile);
}

module.exports = DeleteProfile