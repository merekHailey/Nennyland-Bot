const Informant = require("../../Informant");
const Tclient = require("../../Clients/TClient");
const CreateQuest = require("./CreateQuest");
const SetOffQuest = require("./SetOffQuest");

async function StartQuest(Platform, profile){
    Informant.debug("Quest Sarting...")
    let quest = await CreateQuest(Platform, profile)
    if(quest){
        if(Platform.name === 'twitch'){
            Tclient.say(Platform.channel, `${profile.name} has started a quest! Join in with "!join" to aid in its success and earn Affinity!`)
        }
        setTimeout(SetOffQuest, 10000)
    }
}

module.exports = StartQuest;