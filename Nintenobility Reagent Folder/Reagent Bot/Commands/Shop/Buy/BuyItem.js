const Tclient = require("../../../Clients/TClient");
const AddToInv = require("../../../Affinity/Helpers/AddToInv");
const ChangeAffinity = require("../../../Affinity/ChangeAffinity");
const SearchInv = require("../../../Affinity/Helpers/SearchInv");
const SearchEquipped = require("../../../Affinity/Helpers/SearchEquipped");
const Equip = require("../../Equip/Equip");


function BuyItem(Platform, profile, item){
    let response;
    if(item){
        if(SearchInv(profile, item.name) || SearchEquipped(profile, item.name)){
            response = `${profile.name}, you already have this: ${item.name}`
        }
        else if(profile.affinity >= item.cost){
            ChangeAffinity(profile, -(item.cost))
            AddToInv(profile, item);
            Equip(Platform, profile, item, false)
            response = `${profile.name}, you have purchased and equipped the ${item.name} for ${item.cost} Affinity`
        }
        else{
            response = `${profile.name}, you do not have enough affinity for ${item.name}`
        }
        if(Platform.name === "twitch"){
            
            Tclient.say(Platform.channel, response)
        }
    }
    else{
        if(Platform.name === "twitch"){
            
            Tclient.say(Platform.channel, `That item does not exist in the shop, ${profile.name}. Check the shop with "!shop"`)
        }
    }
    
    
    return profile;
}

module.exports = BuyItem;