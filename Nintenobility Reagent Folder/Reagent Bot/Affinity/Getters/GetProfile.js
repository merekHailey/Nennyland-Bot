const Informant = require("../../Informant");
const config = require("../../config");

async function GetProfile(id){
    try{
        let response = await fetch(`${config.apiScheme}${config.apiHost}:${config.apiPort}/api/profiles/${id}`)
        
        if(response.ok){
            let profile = response.json()
            return profile;
        }
        else{
            Informant.warn(response.status + " " + response.statusText + " in Get Profile")
            return null
        }
    }
    catch(err){
        Informant.error(err)
        return null
    }

    
    
}

module.exports = GetProfile;