const AddToInv = require("./AddToInv");

function MoveEquToInv(profile, itemToMove){
    
    if(itemToMove.slot === "headgear"){
        profile = AddToInv(profile, itemToMove)
        profile.inventory.equipped.headgear = undefined
    }
    if(itemToMove.slot === "torso"){
        profile = AddToInv(profile, itemToMove)
        profile.inventory.equipped.torso = undefined
    }
    if(itemToMove.slot === "handgear"){
        profile = AddToInv(profile, itemToMove)
        profile.inventory.equipped.handgear = undefined
    }
    if(itemToMove.slot === "footwear"){
        profile = AddToInv(profile, itemToMove)
        profile.inventory.equipped.footwear = undefined
    }
    if(itemToMove.slot === "offHand"){
        if(profile.inventory.equipped.offHand && profile.inventory.equipped.offHand.name === "DualShell"){
            profile = AddToInv(profile, profile.inventory.equipped.mainHand)
            profile.inventory.equipped.mainHand = undefined
            profile.inventory.equipped.offHand = undefined
        }
        else{
            profile = AddToInv(profile, itemToMove)
            profile.inventory.equipped.offHand = undefined
        }
        
    }
    if(itemToMove.slot === "mainHand"){
        if(profile.inventory.equipped.offHand && profile.inventory.equipped.offHand.name === "DualShell"){
            profile = AddToInv(profile, profile.inventory.equipped.mainHand)
            profile.inventory.equipped.mainHand = undefined
            profile.inventory.equipped.offHand = undefined
        }
        else{
            profile = AddToInv(profile, itemToMove)
            profile.inventory.equipped.mainHand = undefined
        }
    }
    
    else if(itemToMove.slot === "both"){
        profile = AddToInv(profile, profile.inventory.equipped.mainHand)
        profile.inventory.equipped.mainHand = undefined
        profile.inventory.equipped.offHand = undefined
    }
    
    
    return profile
}

module.exports = MoveEquToInv;