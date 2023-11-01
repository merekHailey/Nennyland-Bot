const Tclient = require("../../Clients/TClient");
const CancelDuel = require("./CancelDuel");
const DisplayDuelInfo = require("../../Affinity/Helpers/DisplayDuelInfo");


function DuelAsk(Platform, challenger, challenged){
    if(!challenger.timers.duelLimit && !challenged.timers.duelLimit){
        challenger.state = "Asking to Duel"
        challenged.state = "Asked to Duel"
        if(Platform.name === 'twitch'){
            challenged.duelPartner = {
                name: challenger.name,
                id: challenger.twitchid
            }
            challenger.duelPartner = {
                name: challenged.name,
                id: challenged.twitchid
            }
        }
        setTimeout(() => {CancelDuel(Platform, challenger, challenged, true, false)}, 60000)
        challenger.timers.askDuel = true;
        if(Platform.name === "twitch"){
            Tclient.say(Platform.channel, DisplayDuelInfo(Platform, challenger, challenged))
        }
    }
    else if(challenger.timers.duelLimit && challenger.timers.duelLimit){
        if(Platform.name === "twitch"){
            Tclient.say(Platform.channel, `Both ${challenger.name} and ${challenged.name}'s duel cooldowns are still active`)
        }
    }
    else if(challenger.timers.duelLimit){
        if(Platform.name === "twitch"){
            Tclient.say(Platform.channel, `${challenger.name}'s duel cooldowns is still active`)
        }
    }
    else if(challenger.timers.duelLimit){
        if(Platform.name === "twitch"){
            Tclient.say(Platform.channel, `${challenged.name}'s duel cooldowns is still active`)
        }
    }
    let bothProfiles = {
        challenger: challenger,
        challenged: challenged
    }
    return bothProfiles
}
        


module.exports = DuelAsk;