
function GetGearCP(profile, setBonus){
    let cp = 0;
    if(setBonus){     
        cp += profile.inventory.equipped.headgear.cpSet
        cp += profile.inventory.equipped.torso.cpSet
        cp += profile.inventory.equipped.handgear.cpSet
        cp += profile.inventory.equipped.footwear.cpSet
        cp += profile.inventory.equipped.mainHand.cp
        if(profile.inventory.equipped.offhand)
        cp += profile.inventory.equipped.offHand.cp
    }
    else {
        if(profile.inventory.equipped.headgear)
        cp += profile.inventory.equipped.headgear.cp

        if(profile.inventory.equipped.torso)
        cp += profile.inventory.equipped.torso.cp

        if(profile.inventory.equipped.handgear)
        cp += profile.inventory.equipped.handgear.cp

        if(profile.inventory.equipped.footwear)
        cp += profile.inventory.equipped.footwear.cp

        if(profile.inventory.equipped.offHand)
        cp += profile.inventory.equipped.offHand.cp

        if(profile.inventory.equipped.mainHand)
        cp += profile.inventory.equipped.mainHand.cp
    }
    return cp;
}

module.exports = GetGearCP;