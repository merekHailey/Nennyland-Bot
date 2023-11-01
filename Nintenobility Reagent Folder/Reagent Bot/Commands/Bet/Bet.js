
function Bet(Platform, profile, ProfileToBet, amount){ 

    if(ProfileToBet.state === 'dueling'){
        BetOnDuel(profile, amount)

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

module.exports = Bet;