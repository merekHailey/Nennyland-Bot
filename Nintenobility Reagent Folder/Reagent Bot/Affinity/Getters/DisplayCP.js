const Tclient = require("../../Clients/TClient")
const GetCP = require("./GetCP")

function DisplayCP(Platform, profile){
    let cpObj = GetCP(profile)
    if(Platform.name === 'twitch'){
        if(cpObj.setBonus)
        Tclient.say(Platform.channel, `You have ${cpObj.cp} CP. With your ${cpObj.setBonus} set bonus!`)
        else
        Tclient.say(Platform.channel, `You have ${cpObj.cp} CP.`) 
    }
}

module.exports = DisplayCP

        