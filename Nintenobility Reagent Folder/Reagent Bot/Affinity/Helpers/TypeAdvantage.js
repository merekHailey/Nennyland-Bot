
function TypeAdvantage(potentialAdvantage, other){
    if(potentialAdvantage.inventory.equipped.mainHand && other.inventory.equipped.mainHand){
        if(potentialAdvantage.inventory.equipped.mainHand.type === "Physical" && other.inventory.equipped.mainHand.type === "Magic"){
            return true
        }
        if(potentialAdvantage.inventory.equipped.mainHand.type === "Magic" && other.inventory.equipped.mainHand.type === "Ranged"){
            return true
        }
        if(potentialAdvantage.inventory.equipped.mainHand.type === "Ranged" && other.inventory.equipped.mainHand.type === "Physical"){
            return true
        }
    }
    
    return false
}

module.exports = TypeAdvantage;