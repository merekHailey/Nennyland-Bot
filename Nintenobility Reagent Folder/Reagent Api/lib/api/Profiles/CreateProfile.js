const Informant = require("../../Informant");
const config = require("../../config");
const Area = require("../../models/AreaSchema");
const Profile = require("../../models/ProfileSchema");



async function CreateProfile(req, res){
    console.log("CreateProfile")

    let areas = await Area.find()
    let initResidence;
    do{
        initResidence = areas[Math.floor(Math.random() * 1000) % areas.length].areaId;
    }while(initResidence === "The Noble Peaks")
    console.log(req.body)

    let newProf = new Profile({
        name: req.body.name,
        lowerName: req.body.lowerName,
        twitchUsername: req.body.twitchUsername,
        twitchid: req.body.twitchid,
        residence: initResidence,
        affinity: 10,
        state: "free",
        duelPartner: {},
        inventory: {
            equipped: {
                headgear: {},
                torso: {},
                handgear: {},
                footwear: {},
                mainHand: {},
                offHand: {},
            },
            items: []
        },
        land: [],
        timers: {
            duelLimit: false,
            askDuel: false
        }
    });
    Informant.debug("Profile created")
    try{
        Informant.info(initResidence)
        await newProf.save()
        res.send(newProf)
    }
    catch(err){
        Informant.error(err + "in Create Profile")
        res.send(err)
    }

}

module.exports = CreateProfile