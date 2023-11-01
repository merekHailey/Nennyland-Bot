const { apiScheme, apiHost, apiPort } = require("../../config");
const Informant = require("../../Informant");
const JoinQuest = require("./JoinQuest");

async function CreateQuest(Platform, profile){
    let response = await fetch(`${apiScheme}${apiHost}:${apiPort}/quest`)
    if(response.ok){
       var isQuest = await response.json() 
    }
    
    if(!isQuest){
        let newQuest = new Quest();
        Informant.debug("Quest created")
        await newQuest.save()
        Informant.debug("Quest saved")
        JoinQuest(Platform, profile);
        return newQuest;
    }
    return null;
}

module.exports = CreateQuest