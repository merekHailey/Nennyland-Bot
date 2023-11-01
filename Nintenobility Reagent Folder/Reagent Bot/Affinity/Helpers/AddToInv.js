

function AddToInv(profile, itemToAdd){
    
    profile.inventory.items.push(itemToAdd)
    
    return profile
}

module.exports = AddToInv;