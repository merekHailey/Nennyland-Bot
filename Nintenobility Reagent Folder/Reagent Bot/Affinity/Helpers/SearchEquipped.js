const Informant = require("../../Informant");

function SearchEquipped(profile, nameOfItemToFind){
    
    let equipped = profile.inventory.equipped;
    let item;

    item = equipped.headgear;
    
    if(item != undefined && item.name != undefined && item.name.toLowerCase() === nameOfItemToFind.toLowerCase()){
        Informant.info('Item Equipped: ' + item.name);
        return item;
    }

    item = equipped.torso;
    if(item != undefined && item.name != undefined && item.name.toLowerCase() === nameOfItemToFind.toLowerCase()){
        Informant.info('Item Equipped: ' + item.name);
        return item;
    }

    item = equipped.handgear;
    if(item != undefined && item.name != undefined && item.name.toLowerCase() === nameOfItemToFind.toLowerCase()){
        Informant.info('Item Equipped: ' + item.name);
        return item;
    }

    item = equipped.footwear;
    if(item != undefined && item.name != undefined && item.name.toLowerCase() === nameOfItemToFind.toLowerCase()){
        Informant.info('Item Equipped: ' + item.name);
        return item;
    }

    item = equipped.offHand;
    if(item != undefined && item.name != undefined && item.name.toLowerCase() === nameOfItemToFind.toLowerCase()){
        Informant.info('Item Equipped: ' + item.name);
        return item;
    }

    item = equipped.mainHand;
    if(item != undefined && item.name != undefined && item.name.toLowerCase() === nameOfItemToFind.toLowerCase()){
        Informant.info('Item Equipped: ' + item.name);
        return item;
    }
    
    Informant.info('Item not Equipped: ' + nameOfItemToFind);
    return undefined
}

module.exports = SearchEquipped;