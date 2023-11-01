const { apiScheme, apiHost, apiPort } = require("../../config");

async function AddToQuest(profile){
    let response = await fetch(`${apiScheme}${apiHost}:${apiPort}/quest`)
    if(response.ok){
        let activeQuest = await response.json()
        activeQuest.questingProfiles.push(profile); 
        let Qresponse = await fetch(`${apiScheme}${apiHost}:${apiPort}/quest`,
        {
            mode: "cors",
            method: "PUT",
            body: {activeQuest}
        })
        profile.state = 'waitingToQuest';
        let Presponse = await fetch(`${apiScheme}${apiHost}:${apiPort}/profile/${profile.name}`,
        {
            mode: "cors",
            method: "PUT",
            body: {profile}
        })
    }
    

    
}

module.exports = AddToQuest;