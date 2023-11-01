const Informant = require("../../Informant")
const GetDuelOdds = require("./GetDuelOdds")

function DetermineWinner(challenger, challenged){
    let oddsObj = GetDuelOdds(challenger, challenged)
    let winner;

    winningNum = Math.floor(Math.random() * 100) + 1
    Informant.info("Winning Number: " + winningNum)
    if(winningNum <= oddsObj.challengerOdds){
        winner = challenger
    }
    else{
        winner = challenged
    }
    Informant.info(winner.name)
    return winner
}

module.exports = DetermineWinner
