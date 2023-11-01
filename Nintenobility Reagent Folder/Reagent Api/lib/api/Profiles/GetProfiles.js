const Informant = require("../../Informant")
const Profile = require("../../models/ProfileSchema")


async function GetProfiles(req, res){
    
    Informant.http("GetProfiles")
    let profiles = await Profile.find({})
    if(profiles){
        res.send(profiles)
    }
    else{
        res.sendStatus(404)
    }
}

module.exports = GetProfiles