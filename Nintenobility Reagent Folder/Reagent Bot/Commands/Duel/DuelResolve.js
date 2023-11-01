const ChangeAffinity = require("../../Affinity/ChangeAffinity");
const GetScaledAffinity = require("../../Affinity/Getters/GetScaledAffinity");
const Tclient = require("../../Clients/TClient");
const DetermineWinner = require("./DetermineWinner");
const GetDuelOdds = require("./GetDuelOdds");
const { apiScheme, apiHost, apiPort } = require("../../config");


async function DuelResolve(Platform, challenger, challenged, duel){
    let winner = DetermineWinner(challenger, challenged)
    let winnings;
    challenger.state = 'free'
    challenged.state = 'free'
    challenger.duelPartner = {}
    challenged.duelPartner = {}
    let odds = GetDuelOdds(challenger, challenged)
    

    if(winner.name == challenger.name){
        challenger = ChangeAffinity(challenger, (GetScaledAffinity(odds.challengerOdds, duel.duelistsBet)).total)
        winnings = GetScaledAffinity(odds.challengerOdds, duel.duelistsBet)
    }
    else{
        challenger = ChangeAffinity(challenger, -(GetScaledAffinity(odds.challengerOdds, duel.duelistsBet)).total)
    }

    if(winner.name == challenged.name){
        challenged = ChangeAffinity(challenged, GetScaledAffinity(odds.challengedOdds, duel.duelistsBet).total)
        winnings = GetScaledAffinity(odds.challengedOdds, duel.duelistsBet)
    }
    else{
        challenged = ChangeAffinity(challenged, -(GetScaledAffinity(odds.challengedOdds, duel.duelistsBet)).total)
    }

    if(Platform.name = "twitch"){
        Tclient.say(Platform.channel, `${winner.name} is the winner! They won ${winnings.total} Affinity! All those who bet on them get a ${winnings.scale}X return on their bet!`)
    }
    

    let CRresponse = await fetch(`${apiScheme}${apiHost}:${apiPort}/profiles/${challenger.name}`,
        {
            mode: "cors",
            method: "PUT",
            body: {challenger}
        })
        let CDresponse = await fetch(`${apiScheme}${apiHost}:${apiPort}/profiles${challenged.name}`,
        {
            mode: "cors",
            method: "PUT",
            body: {challenged}
        })
        let Dresponse = await fetch(`${apiScheme}${apiHost}:${apiPort}/duels/${challenged.duelObjId}`,
        {
            mode: "cors",
            method: "DELETE"
        })

    


}

module.exports = DuelResolve;