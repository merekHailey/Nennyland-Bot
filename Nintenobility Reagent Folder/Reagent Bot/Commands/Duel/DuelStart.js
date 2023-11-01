const { apiScheme, apiHost, apiPort } = require("../../config");
const Informant = require("../../Informant");
const Tclient = require("../../Clients/TClient");
const DuelResolve = require("./DuelResolve");
const EnableDuel = require("./EnableDuel");

async function DuelStart(Platform, challenger, challenged){
    try{
        let response = await fetch(`${apiScheme}${apiHost}:${apiPort}/duels`,
        {
            mode: "cors",
            method: "POST",
            body: {challenger, challenged}
        })

        if(response.ok){
            let duel = await response.json();
            challenger.timers.askDuel = false;

            setTimeout(() => EnableDuel(challenger), config.duelTimer)
            setTimeout(() => EnableDuel(challenged), config.duelTimer)
            challenger.timers.duelLimit = true
            challenged.timers.duelLimit = true

            challenger.state = "dueling";
            challenged.state = "dueling";
            challenger.duelObjId = duel._id
            challenged.duelObjId = duel._id

            setTimeout(() => DuelResolve(Platform, challenger, challenged, duel), 60000)

            if(Platform.name === "twitch"){
                Tclient.say(Platform.channel, `${challenger.name} and ${challenged.name} have begun their duel! Bet on who will win with "!bet {amount}"`)
        }
        }

        
    }
        
    catch(err){
        Informant.error("Unable to save Duel in DuelStart: " + err)
        if(Platform.name === "twitch"){
            Tclient.say(Platform.channel, `${challenger.name} and ${challenged.name}'s duel failed. My bad! Try again!"`)
        }
        challenger.timers.askDuel = null;

        challenger.state = "free";
        challenged.state = "free";
    }
    let bothProfiles = {challenger: challenger, challenged: challenged}
    return bothProfiles
}

module.exports = DuelStart;