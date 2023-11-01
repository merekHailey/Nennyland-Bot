const Informant = require('../../Informant');
const config = require("../../config")
const items = require("../../Commands/Shop/items")



async function GetItem(itemToFind){


    for(let item of items){
        if(item.name.toLowerCase() === itemToFind){
            Informant.debug("found item in got item: " + item.name)
            return item
        }
    }
    
    Informant.debug("could not find item in got item: " + itemToFind)
    return undefined;
}

module.exports = GetItem;