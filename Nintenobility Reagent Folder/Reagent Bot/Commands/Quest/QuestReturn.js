const { apiScheme, apiHost, apiPort } = require("../../config");

async function QuestReturn(){
    let response = await fetch(`${apiScheme}${apiHost}:${apiPort}/quest`)

    
    
}

module.exports = QuestReturn;