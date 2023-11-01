const { apiScheme, apiHost, apiPort } = require("../../config");
const Informant = require('../../Informant')

async function BetOnDuel(Platform, profile, ProfileToBet, amount){ 

    let bet = {
        profile,
        amount
    }
    let duel

    try{
        let response = await fetch(`${apiScheme}${apiHost}:${apiPort}/duels/${ProfileToBet.duelObjId}`)
        if (response.ok){
        duel = await response.json();
        }

    }
    catch(err){
        Informant.error("Error in finding duel in BetOnDuel " + err)
        return undefined
    }
    if(duel.challenger == ProfileToBet){
        duel.challengerSupporters.push(bet)
    }
    else if(duel.challenged == ProfileToBet){
        duel.challengedSupporters.push(bet)
    }
    else
    return undefined

}

module.exports = BetOnDuel;