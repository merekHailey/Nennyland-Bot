const Informant = require("../../../Informant");
const Area = require("../../../models/AreaSchema")

function CreateArea(req, res){
    console.log(req.body)
    let newArea = new Area({
        name: req.body.name,
        areaId: req.body.areaId,
        owner: req.body.owner,
        ownedSince: "The Dawn of Time",
        cost: req.body.cost,
        adjacencies: req.body.adjacencies
    })

    try{
        newArea.save();
        res.send(newArea);
    }
    catch(err){
        Informant.error(err + " in CreateArea")
        res.send(err)
    }
}

module.exports = CreateArea