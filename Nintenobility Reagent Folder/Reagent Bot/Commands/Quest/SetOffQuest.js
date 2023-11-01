const { apiScheme, apiHost, apiPort } = require("../../config");

async function SetOffQuest(){
    let Qresponse = await fetch(`${apiScheme}${apiHost}:${apiPort}/quest`)
    if(Qresponse.ok){
        var quest = await Qresponse.json();
    }

    quest.state = "questing"

    let response = await fetch(`${apiScheme}${apiHost}:${apiPort}/quest`,
        {
            mode: "cors",
            method: "PUT",
            body: {quest}
        })

    let questingProfiles = Profile.find({state: 'waitingToQuest'})
    
}

module.exports = SetOffQuest;