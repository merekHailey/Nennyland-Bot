const TypeAdvantage = require("../../Affinity/Helpers/TypeAdvantage");
const GetCP = require("../../Affinity/Getters/GetCP");

function GetDuelOdds(challenger, challenged){
    let oddsObj = {
        text: '',
        challengerOdds: 0,
        challengedOdds: 0
    };

        let challengerCP = GetCP(challenger).cp
        let challengedCP = GetCP(challenged).cp

        if(challengerCP > challengedCP){
            oddsObj.challengerOdds = ((challengerCP - challengedCP) + 50) 

            if(TypeAdvantage(challenger, challenged)){
                oddsObj.challengerOdds += 10
            }
            
            else if(TypeAdvantage(challenged, challenger)){
                oddsObj.challengerOdds -= 10
            }

            if(oddsObj.challengerOdds > 90){
                oddsObj.challengerOdds = 90;
            }
            oddsObj.challengedOdds = 100 - oddsObj.challengerOdds
            
        }
        else if(challengedCP > challengerCP){
            oddsObj.challengedOdds = ((challengedCP - challengerCP) + 50)
            if(TypeAdvantage(challenged, challenger)){
                oddsObj.challengedOdds += 10
            }
            else if(TypeAdvantage(challenger, challenged)){
                oddsObj.challengedOdds -= 10
            }
            if(oddsObj.challengedOdds > 90){
                oddsObj.challengedOdds = 90;
            }
            oddsObj.challengerOdds = 100 - oddsObj.challengedOdds
        }

        else if(challengedCP == challengerCP){
            oddsObj.challengedOdds = 50
            if(TypeAdvantage(challenged, challenger)){
                oddsObj.challengedOdds += 10
            }
            else if(TypeAdvantage(challenger, challenged)){
                oddsObj.challengedOdds -= 10
            }
            oddsObj.challengerOdds = 100 - oddsObj.challengedOdds
        }

        oddsObj.text = `${oddsObj.challengerOdds}/${oddsObj.challengedOdds}`



    return oddsObj;
}

module.exports = GetDuelOdds;