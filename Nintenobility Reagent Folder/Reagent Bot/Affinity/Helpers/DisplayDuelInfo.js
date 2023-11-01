const GetCP = require("../Getters/GetCP");
const GetDuelOdds = require("../../Commands/Duel/GetDuelOdds");

function DisplayDuelInfo(Platform, profile, challengedProfile){
    let message;
    let duelOdds = GetDuelOdds(profile, challengedProfile);
    if(Platform.name === "twitch"){
        message = `${profile.name} is challenging ${challengedProfile.name} to a duel! ${profile.name}'s CP: ${GetCP(profile).cp} ${challengedProfile.name}'s CP: ${GetCP(challengedProfile).cp} ${duelOdds.text}}`
    }
    return message
}

module.exports = DisplayDuelInfo;