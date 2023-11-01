const Informant = require("../../Informant");
const DClient = require('../../Clients/DClient');
const { apiScheme, apiHost, apiPort } = require("../../config");

async function CreateProfile(Platform){
    try{

        
        if(Platform.name === 'twitch'){
            let response = await fetch(`${apiScheme}${apiHost}:${apiPort}/api/profiles`,
            {
                mode: "cors",
                method: "POST",
                body: {
                    name: Platform.tags["display-name"],
                    lowerName: Platform.tags["display-name"].toLowerCase(),
                    twitchUsername: Platform.tags.username,
                    twitchid: Platform.tags["user-id"],
                }
            })
            if(response.ok){
                Informant.debug("Profile created")
                let newProf = await response.json();
                return newProf;
            }
            else{
                console.log(response.status)
            }
        }
        else if(Platform.name === 'discord'){
            DClient.channels.cache.get(Platform.message.channelId).send('Connect your profile using your twitch username with "!connect {Twitch username}"');
            return null;
        }
    }
    catch(err){
        Informant.error(err + " in Create Profile")
        return null;
    }
}

module.exports = CreateProfile