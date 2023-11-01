const Informant = require("../Informant");
const { apiScheme, apiHost, apiPort } = require("../config");


async function FindChallenger(Platform, challengedUser){
    try{
        if(Platform.name === 'twitch'){
            let response = await fetch(`${apiScheme}${apiHost}:${apiPort}/profiles/${challengedUser}`)
            if(response.ok){
                let challengedProfile = await response.json()
                return challengedProfile;
            }
            else{
                return undefined;
            }
            
        }
    }
    catch(err){
        Informant.error("Error in Find Challenger Twitch: " + err)
        return undefined
    }
    
}

module.exports = FindChallenger;