const Informant = require("../../Informant");

function GetSetBonus(profile){
    
    let setBonus;
    if(profile.inventory.equipped !== undefined){
        if(profile.inventory.equipped.headgear && profile.inventory.equipped.torso && profile.inventory.equipped.handgear && profile.inventory.equipped.footwear && profile.inventory.equipped.mainHand){
            if(profile.inventory.equipped.headgear.type === profile.inventory.equipped.torso.type && profile.inventory.equipped.headgear.type === profile.inventory.equipped.handgear.type && profile.inventory.equipped.headgear.type === profile.inventory.equipped.footwear.type){
                if(profile.inventory.equipped.headgear.set === profile.inventory.equipped.torso.set && profile.inventory.equipped.headgear.set === profile.inventory.equipped.handgear.set && profile.inventory.equipped.headgear.set === profile.inventory.equipped.footwear.set){
                    if(profile.inventory.equipped.headgear.type === profile.inventory.equipped.mainHand.type)
                    setBonus = profile.inventory.equipped.headgear.set;
                }  
            }
        }  
    }
    return setBonus
}

module.exports = GetSetBonus;