const informant = require('./Informant')
const config = require('./config');
const hollowKnightChat = require('./games/hollowKnight/chat');
const spelunky_2 = require('./games/Spelunky_2');
const Commands = require('./Commands/CommandsRouter');
const AffinityRouter = require('./Affinity/AffinityRouter');
const Informant = require('./Informant');

function onMessage(Platform){
    let Fmessage = '';
    if(Platform.name === "twitch"){
        Fmessage = Platform.message.toLowerCase()
        informant.message(`Twitch-- ${Platform.tags['display-name']}: ${Platform.message}`);
    }
    
    if(Platform.name === "discord"){
        Fmessage = Platform.message.content.toLowerCase()
        informant.message(`Discord-- ${Platform.message.author.username}: ${Platform.message.content}`);
    }

    if(Fmessage.startsWith(config.prefix)){
        let command = Fmessage.slice(config.prefix.length);
        if(Platform.name === 'twitch'){
            Platform.message = command;
        }
        if(Platform.name === 'discord'){
            Platform.message.content = command;
        }
        Commands(Platform);
    }
    
    else {
        if(Platform.name === 'twitch'){
            Platform.message = Fmessage;
        }
        if(Platform.name === 'discord'){
            Platform.message.content = Fmessage;
        }
        Informant.debug("chat")
        AffinityRouter(Platform, "chat");

        if(config.player == "chat"){

            if(config.game === 'hollowKnight') {
                if(config.player == "chat"){
                    hollowKnightChat(channel, tags, Fmessage, self);
                }
                
            }
            if(config.game === 'spelunky_2') {
                spelunky_2(channel, tags, Fmessage, self);
            }
            
        }
    }
}

module.exports = onMessage