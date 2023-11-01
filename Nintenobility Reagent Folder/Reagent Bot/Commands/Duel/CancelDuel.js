const GetProfile = require("../../Affinity/Getters/GetProfile");
const Informant = require("../../Informant");
const Tclient = require("../../Clients/TClient");


async function CancelDuel(Platform, challengerProf, challengedProf, save, returnBothProfiles){

    let challenger = await GetProfile(Platform, challengerProf.twitchid)
    let challenged = await GetProfile(Platform, challengedProf.twitchid)

    if(challenger.timers.askDuel == true){
        challenger.state = "free";
        challenged.state = "free";
        challenger.timers.askDuel = false;
        challenged.timers.askDuel = false;
        challenger.duelPartner = {};
        challenged.duelPartner = {};
        if(Platform.name === 'twitch'){
            Tclient.say(Platform.channel, `${challenger.name} and ${challenged.name}'s duel was canceled.`)
        }
        if(save){
            challenger.save();
            challenged.save();
            Informant.info(`${challenger.name}'s duel cancel was saved`);
        }
        

        if(returnBothProfiles){
            let bothProfiles = {challenger: challenger, challenged: challenged}
            return bothProfiles
        }
    }
    return
}

module.exports = CancelDuel;