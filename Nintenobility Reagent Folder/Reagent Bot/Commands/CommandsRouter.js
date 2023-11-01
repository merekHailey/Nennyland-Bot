const AffinityRouter = require("../Affinity/AffinityRouter");
const Informant = require("../Informant");
const Duel = require("./Duel/Duel");
const Shop = require("./Shop/Shop")


async function Command(Platform){

    let message;
    if(Platform.name === 'twitch'){
        message = Platform.message
    }
    if(Platform.name === 'discord'){
        message = Platform.message.content
    }
        
    if(message.startsWith("shop")){
        Shop(Platform);
    }

    if(message.startsWith("quest")){
        AffinityRouter(Platform, "quest");  
    }

    if(message.startsWith("join")){
        AffinityRouter(Platform, "join");  
    }

    if(message.startsWith("cp")){
        AffinityRouter(Platform, "cp");  
    }
    
    if(message.startsWith("duel")){
        let params = message.slice(5)
        params.trim()
        if(Platform.name === 'twitch'){
            Platform.message = params
        }
        if(Platform.name === 'discord'){
            Platform.message.content = params
        }
        
        Duel(Platform, params)
    }

    if(message.startsWith("bet")){
        let params = message.slice(4)
        params.trim()
        if(Platform.name === 'twitch'){
            Platform.message = params
        }
        if(Platform.name === 'discord'){
            Platform.message.content = params
        }
        
        AffinityRouter(Platform, "bet", params)
    }
    
    if(message.startsWith("buy")){
        let params = message.slice(4)
        params.trim()
        if(Platform.name === 'twitch'){
            Platform.message = params
        }
        if(Platform.name === 'discord'){
            Platform.message.content = params
        }
        AffinityRouter(Platform, "buyItem", params)
    }
    if(Platform.message.startsWith("equip")){
        let params = Platform.message.slice(6)
        params.trim()
        if(Platform.name === 'twitch'){
            Platform.message = params
        }
        if(Platform.name === 'discord'){
            Platform.message.content = params
        }
        AffinityRouter(Platform, "equip", params);
    }
    
}

module.exports = Command