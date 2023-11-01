const { dualShell } = require("../Shop/items");
const Tclient = require("../../Clients/TClient");
const MoveEquToInv = require("../../Affinity/Helpers/MoveEquToInv");
const RemoveFromInv = require("../../Affinity/Helpers/RemoveFromInv");
const SearchEquipped = require("../../Affinity/Helpers/SearchEquipped");
const SearchInv = require("../../Affinity/Helpers/SearchInv");

function Equip(Platform, profile, itemToEquip, speak, tryText){
    
    if(itemToEquip != undefined){

        if(itemToEquip.slot === "headgear"){
            if(profile.inventory.equipped.headgear){
                MoveEquToInv(profile, profile.inventory.equipped.headgear)
            }
            profile.inventory.equipped.headgear = itemToEquip;
            RemoveFromInv(profile, itemToEquip)
        }
        else if(itemToEquip.slot === "torso"){
            if(profile.inventory.equipped.torso){
                MoveEquToInv(profile, profile.inventory.equipped.torso)
            }
            profile.inventory.equipped.torso = itemToEquip;
            RemoveFromInv(profile, itemToEquip)
        }
        else if(itemToEquip.slot === "handgear"){
            if(profile.inventory.equipped.handgear){
                MoveEquToInv(profile, profile.inventory.equipped.handgear)
            }
            profile.inventory.equipped.handgear = itemToEquip;
            RemoveFromInv(profile, itemToEquip)
        }
        else if(itemToEquip.slot === "footwear"){
            if(profile.inventory.equipped.footwear){
                MoveEquToInv(profile, profile.inventory.equipped.footwear)
            }
            profile.inventory.equipped.footwear = itemToEquip;
            RemoveFromInv(profile, itemToEquip)
        }
        else if(itemToEquip.slot === "offHand"){
            if(profile.inventory.equipped.offHand){
                MoveEquToInv(profile, profile.inventory.equipped.offHand)
            }
            profile.inventory.equipped.offHand = itemToEquip;
            RemoveFromInv(profile, itemToEquip)
        }
        else if(itemToEquip.slot === "mainHand"){
            if(profile.inventory.equipped.mainHand){
                MoveEquToInv(profile, profile.inventory.equipped.mainHand)
            }
            profile.inventory.equipped.mainHand = itemToEquip;
            RemoveFromInv(profile, itemToEquip)
        }
        else if(itemToEquip.slot === "both"){

            if(profile.inventory.equipped.mainHand){
                MoveEquToInv(profile, profile.inventory.equipped.mainHand)
            }
            if(profile.inventory.equipped.offHand && profile.inventory.equipped.offHand.name !== "DuelShell"){
                MoveEquToInv(profile, profile.inventory.equipped.offHand)
            }
            profile.inventory.equipped.mainHand = itemToEquip;
            profile.inventory.equipped.offHand = dualShell
            RemoveFromInv(profile, itemToEquip)
        }
        
    }   
    
    //If not found in inventory, then check equipped
    if(Platform.name === "twitch"){
        if(speak){
            if(!itemToEquip){
                let itemEquipped = SearchEquipped(profile, tryText)
                if(itemEquipped){
                    Tclient.say(Platform.channel, `${Platform.tags['display-name']}, you already have your ${itemEquipped.name} equipped!`)
                }
                else{
                    Tclient.say(Platform.channel, `${Platform.tags['display-name']}, you do not own this: ${tryText}`)
                }
            }
            else{
                if(SearchEquipped(profile, itemToEquip.name)){
                    Tclient.say(Platform.channel, `${Platform.tags['display-name']}, you have equipped your ${itemToEquip.name}!`)
                }
            }
            
        }
    }

   
    return profile
}

module.exports = Equip;