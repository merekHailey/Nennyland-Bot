const DuelStart = require("./DuelStart");

function DuelRouter(Platform, challenger, challenged, event){
    if(event === "AgreeToDuel"){
        bothProfiles = DuelStart(Platform, challenger, challenged)
    }
    return bothProfiles
}

module.exports = DuelRouter;