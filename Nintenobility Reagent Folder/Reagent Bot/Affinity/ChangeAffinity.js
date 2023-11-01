const Informant = require("../Informant");


function ChangeAffinity(profile, amountToChange){
    Informant.info(`${profile.name} affinity: ${profile.affinity} -> ${profile.affinity + amountToChange}`)
    profile.affinity += amountToChange;
    return profile
}

module.exports = ChangeAffinity;