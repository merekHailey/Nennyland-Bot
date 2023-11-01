const GetSetBonus = require("./GetSetBonus");
const GetGearCP = require("./GetGearCp");
const Informant = require("../../Informant");

function GetCP(profile){
    
    let totalCP = {
        cp: 0,
        setBonus: "",
    };
    let setBonus = GetSetBonus(profile);
        
    
    
    totalCP = {
        cp: GetGearCP(profile, setBonus),
        setBonus: setBonus
    }

    return totalCP
}

module.exports = GetCP;