let commandList = [
    "duel",
    "buy",
    "equip",
    "connect",
    "quest",
    "shop",
    "join"
]

function isCommand(Platform){
    let command = '';
    if(Platform.name === 'twitch'){
        command = Platform.message
    }
    if(Platform.name === 'discord'){
        command = Platform.message.content
    }

    for(let commandInList of commandList){
        if(command === commandInList){
            return true
        }
    }
    return false
}

module.exports = isCommand;