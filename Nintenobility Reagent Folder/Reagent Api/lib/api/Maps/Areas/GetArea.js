const Area = require("../../../models/AreaSchema")


async function GetArea(req, res){
    let area = await Area.findOne({areaId: req.params.areaId})
    if(area){
        res.send(area);
    }
    else{
        res.sendStatus(404)
    }
}

module.exports = GetArea