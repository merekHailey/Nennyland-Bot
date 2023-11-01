const Informant = require("../../Informant");
const Profile = require("../../models/ProfileSchema")


async function GetProfile(req, res){

    let id = req.params.profileId;
    let profile
    Informant.http("GetProfile")
    try{
        
        profile = await Profile.findOne({twitchUsername: id});
        console.log(profile)

        if(profile === null){
            profile = await Profile.findOne({twitchid: id});
            console.log(profile)
        }

        if(profile === null){
            profile = await Profile.findOne({discordUsername: id});
            console.log(profile)
        }

        if(profile === null){
            profile = await Profile.findOne({lowerName: id});
            console.log(profile)
        }
        
        if(profile === null){
            res.sendStatus(404)
            console.log(profile)
        }
        else{
        console.log(profile)
        res.send(profile)
        }
    }
    catch(err){
        Informant.error(err + " in Get Profile")
        res.send(err)
    }
}

module.exports = GetProfile