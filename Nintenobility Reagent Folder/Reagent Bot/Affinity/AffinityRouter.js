const config = require("../config");
const Informant = require("../Informant");
const BuyItem = require("../Commands/Shop/Buy/BuyItem");
const ChangeAffinity = require("./ChangeAffinity");
const CreateProfile = require("./Helpers/CreateProfile");
const DuelRouter = require("../Commands/Duel/DuelRouter");
const DuelAsk = require("../Commands/Duel/DuelAsk");
const Equip = require("../Commands/Equip/Equip");
const DisplayCP = require("./Getters/DisplayCP");
const GetItem = require("./Getters/GetItem");
const GetProfile = require("./Getters/GetProfile");
const CancelDuel = require("../Commands/Duel/CancelDuel");
const SearchInv = require("./Helpers/SearchInv");
const StartQuest = require("../Commands/Quest/StartQuest");
const JoinQuest = require("../Commands/Quest/JoinQuest");
const Busy = require("./Helpers/Busy");
const isCommand = require("./Helpers/isCommand");

async function AffinityRouter(Platform, event, data){
    let profile;

    //GET PROFILE
    try{
        if(Platform.name === 'twitch'){
            
            profile = await GetProfile(Platform.tags['user-id']) 
            if(profile === null){
                console.log('here')
                profile = await CreateProfile(Platform)
                console.log(profile)
            }
            else if(profile.duelPartner){
                var duelPartner = await GetProfile(Platform, profile.duelPartner.id)
            }
        }
        
    }
    catch(err){
        Informant.error(`${err} in finding Profile Twitch in affinity router`)
    }
    try{
        if(Platform.name === 'discord'){
            profile = await GetProfile(Platform, Platform.message.author.id)  
            if(profile === null){
                profile = CreateProfile(Platform)
                if(!profile){
                    return
                }
            }
            else if(profile.duelPartner){
                var duelPartner = await GetProfile(Platform, profile.duelPartner.id)
            }
        }
    }
    
    catch(err){
        Informant.error(`${err} in finding Profile Discord in affinity router`)
    }
   
    if(profile.state === 'free'){
        //BUYITEM
        try{
            if(event === "buyItem"){
                let item = GetItem(data)
                profile = BuyItem(Platform, profile, item)
            }
        }
        catch(err){
            Informant.error(`${err} in Buying an item in affinity router`)
        }
        
        //EQUIP
        try{
            if(event === "equip"){
                let itemToEquip = SearchInv(profile, data)
                profile = Equip(Platform, profile, itemToEquip, true, data)
            }
        }
        catch(err){
            Informant.error(`${err} in Equipping an item in affinity router`)
        }

        //START QUEST
        try{
            if(event === "quest"){
                StartQuest(Platform, profile)           
            }
        }
        catch(err){
            Informant.error(`${err} in Starting a quest in affinity router`)
        }
        
        //JOIN QUEST
        try{
            if(event === "join"){
                JoinQuest(Platform, profile)           
            }
        }
        catch(err){
            Informant.error(`${err} in joining a quest in affinity router`)
        }

         //BET
         try{
            if(event === "bet"){
                Bet(Platform, profile)           
            }
        }
        catch(err){
            Informant.error(`${err} in joining a quest in affinity router`)
        }

        //ASK TO DUEL
        try{
            if(event === "duelAsk"){
                
                let bothProfiles = DuelAsk(Platform, profile, data)
                profile = bothProfiles.challenger
                duelPartner = bothProfiles.challenged     
            }
        }
        catch(err){
            Informant.error(`${err} in asking for a duel in affinity router`)
        }
    }
    else if(isCommand(Platform)){
        await Busy(Platform, profile);
    }
//NOT FREE
    //CP CHECK
    try{
        if(event === "cp"){
            DisplayCP(Platform, profile)           
        }
    }
    catch(err){
        Informant.error(`${err} in Displaying CP in affinity router`)
    }

    //RESPONSE TO DUEL
    try{
        if(Platform.message === "yes" && profile.state === "Asked to Duel"){
            let bothProfiles = await DuelRouter(Platform, duelPartner, profile, "AgreeToDuel"); 
            profile = bothProfiles.challenged
            duelPartner = bothProfiles.challenger     
        }
        else if(Platform.message === "no" && profile.state === "Asked to Duel"){
            CancelDuel(Platform, duelPartner, profile, false)
        }
    }
    catch(err){
        Informant.error(`${err} in saying 'yes' to a duel in affinity router`)
    }
    
    //CHATTING REWARD
    try{
        if(event === "chat"){
            profile = ChangeAffinity(profile, config.chatReward)
        }
    }
    catch(err){
        Informant.error(`${err} in rewarding Chat in affinity router`)
    }

    //SAVES
    try{
        let Presponse = await fetch(`${config.apiScheme}${config.apiHost}:${config.apiPort}/profiles/${profile.name}`,
        {
            mode: "cors",
            method: "PUT",
            body: {profile}
        })
        if(data){
            if(data.inventory){
                let Dresponse = await fetch(`${config.apiScheme}${config.apiHost}:${config.apiPort}/profiles/${data.name}`,
                {
                    mode: "cors",
                    method: "PUT",
                    body: {data}
                })
            }
        }
        else if (duelPartner){
            let Dresponse = await fetch(`${config.apiScheme}${config.apiHost}:${config.apiPort}/profiles/${duelPartner.name}`,
            {
                mode: "cors",
                method: "PUT",
                body: {duelPartner}
            })
        }
        Informant.debug("Saved Profiles")
        
    }
    catch(err){
        Informant.error(`${err} in Saving Profiles in affinity router`)
    }
    
    
    
}

module.exports = AffinityRouter;