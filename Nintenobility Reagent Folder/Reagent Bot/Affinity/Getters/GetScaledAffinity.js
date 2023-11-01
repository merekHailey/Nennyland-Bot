function GetScaledAffinity(odds, bet){
    let scaledObj = {
        scale: 0,
        total: 0
    }
    scaledObj.scale = ((odds * 2) / 100) + 1
    scaledObj.total = (bet * scale)
    return scaledObj
}
    

module.exports = GetScaledAffinity;