const AffinityRouter = require("../../Affinity/AffinityRouter");
const FindChallenger = require("../../Affinity/FindChallenger");
const Tclient = require("../../Clients/TClient");

async function TwitchDuel(Platform, usernameToChallenge){
    let challengedUser;
    if(usernameToChallenge.startsWith("@")){
        challengedUser = usernameToChallenge.slice(1)
    }
    else{
        challengedUser = usernameToChallenge;
    }
    let challengedProfile = await FindChallenger(Platform, challengedUser)
    if(challengedProfile)
    AffinityRouter(Platform, "duelAsk", challengedProfile)
    
    else{
        if(Platform.name === "twitch"){
            Tclient.say(Platform.channel, `That person has not started playing, or isn't on this platform.`)
        }
    }

}

module.exports = TwitchDuel