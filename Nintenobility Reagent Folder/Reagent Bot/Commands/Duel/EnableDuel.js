const Informant = require("../../Informant");


function EnableDuel(profile){
    
    profile.timers.duelLimit = false;
    profile.save()
    Informant.info(`${profile.name}'s Duel Limit Cooldown is over`)
    
}

module.exports = EnableDuel;