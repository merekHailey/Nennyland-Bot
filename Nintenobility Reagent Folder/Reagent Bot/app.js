const onMessage = require('./onMessage');
const config = require('./config')
//const {hollowKnightBot} = require('./games/hollowKnight/bot');
const Informant = require('./Informant');
const TClient = require('./Clients/TClient');
const DClient = require('./Clients/DClient')

  try{
    TClient.connect()
    Informant.info("Connected to the Twitch Reagent")
    DClient.login(process.env.DISCORD_TOKEN)
}
catch(err){
    Informant.error(err)
}



TClient.on('message', (channel, tags, message, self) => {
  const Twitch = {channel, tags, message, self, name: "twitch"}
  if(self) return;
  onMessage(Twitch);
});

DClient.on('ready', () => {
  Informant.info("Discord Reagent is Present");
})

DClient.on('messageCreate', message => {
  const Discord = {message: message, name: 'discord'}
  if(message.author.id == '1095730558308454572')
    return
  if(message.channelId != "1011282647818969208")
    return
  
  onMessage(Discord);
})