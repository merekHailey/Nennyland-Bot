const Informant = require("../../Informant");
const DiscordDuel = require("./DiscordDuel");
const TwitchDuel = require("./TwitchDuel");



function Duel(Platform, usernameToChallenge){
    if(Platform.name === "twitch"){
        TwitchDuel(Platform, usernameToChallenge)
    }
    else if(Platform.name === "discord"){
        DiscordDuel(Platform, usernameToChallenge)
    }
}

module.exports = Duel