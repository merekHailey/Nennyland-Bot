
function RemoveFromInv(profile, itemToRemove){
    
    for(item of profile.inventory.items){
        if(item.name === itemToRemove.name){
            const index = profile.inventory.items.indexOf(item);
            if (index > -1) { // only splice array when item is found
            profile.inventory.items.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
    }
    
    return profile
}

module.exports = RemoveFromInv;