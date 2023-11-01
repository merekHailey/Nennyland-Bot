const Informant = require("../../Informant");
const Map = require("../../models/MapSchema")


function CreateMap(req, res){
    let newMap = new Map({
        name: "Nennyland",
        mapId: "Nennyland",
        areas: ["NL0", "NL1", "NL2", "NL3", "NL4", "NL5", "NL6", "NL7", "NL8", "NL9", "NL10", "NL11", "NL12", 
        "NL13", "NL14", "NL15", "NL16", "NL17", "NL18", "NL19", "NL20", "NL21", "NL22", "NL23", "NL24", "NL25"],
    })

    try{
        newMap.save()
        res.send(newMap);
    }
    catch(err){
        Informant.error(err + " in CreateMap")
        res.send(err)
    }
}

module.exports = CreateMap