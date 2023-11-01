const client = require("../../Clients/TClient")



async function DisplayShop(Platform){
   if(Platform.name === "twitch"){
            await client.say(Platform.channel, `https://docs.google.com/spreadsheets/d/1tExoz9ZFggMU1AQ20XF_kBcHk-HV0Dw0KskbDmjB8RM/edit?usp=sharing`)
   }
}

module.exports = DisplayShop