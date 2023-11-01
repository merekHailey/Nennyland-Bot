const { apiScheme, apiHost, apiPort } = require("../../config");
const Tclient = require("../../Clients/TClient");
const AddToQuest = require("./AddToQuest");

async function JoinQuest(Platform, profile){
    
    let response = await fetch(`${apiScheme}${apiHost}:${apiPort}/quest`)
    if(response.ok){
        var quest = response.json();
    }

    if(quest.state === 'joining'){
        AddToQuest(profile)

        if(Platform.name === "twitch"){
            Tclient.say(Platform.channel, `${profile.name} has joined the quest!`)
        }
    }
    else if(quest.state === 'questing'){
        if(Platform.name === "twitch"){
            Tclient.say(Platform.channel, `${profile.name}, the quest has already set off!`)
        }
    }
    else{
        if(Platform.name === "twitch"){
            Tclient.say(Platform.channel, `${profile.name}, there is no quest active.`)
        }
    }
    
}

module.exports = JoinQuest;