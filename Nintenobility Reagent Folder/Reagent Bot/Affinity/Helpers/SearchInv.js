const Informant = require("../../Informant");

function SearchInv(profile, itemToFind){
    
    let inv = profile.inventory.items;
    for(item of inv){
        if(item.name != undefined && item.name.toLowerCase() === itemToFind.toLowerCase()){
            Informant.info('Item Found: ' + item.name);
            return item;
        }
    }
    
    Informant.info('Item not found in Inventory: ' + itemToFind);
    return undefined
}

module.exports = SearchInv;