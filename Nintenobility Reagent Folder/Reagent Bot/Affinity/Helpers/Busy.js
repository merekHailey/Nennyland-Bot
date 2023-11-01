const Tclient = require("../../Clients/TClient");

async function Busy(Platform, profile){
    if(profile.state === 'Asked to Duel')
    Tclient.say(Platform.channel, `${profile.name}, ${profile.duelPartner.name} has asked you to duel, you cannot do that. You may answer with (yes/no)`)

    if(profile.state === 'Asking to Duel')
    Tclient.say(Platform.channel, `${profile.name}, you are asking ${profile.duelPartner.name} to duel. Await their answer or wait for the duel to expire.`)

    if(profile.state === 'dueling')
    Tclient.say(Platform.channel, `${profile.name}, you and ${profile.duelPartner.name} are dueling! You don't have time to do that!`)

    if(profile.state === 'questing')
    Tclient.say(Platform.channel, `${profile.name}, you are on a quest! You can't do that right now.`)
}

module.exports = Busy;