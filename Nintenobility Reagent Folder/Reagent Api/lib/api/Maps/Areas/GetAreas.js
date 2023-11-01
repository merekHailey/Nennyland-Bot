const Area = require("../../../models/AreaSchema")


async function GetAreas(req, res){
    let area = await Area.find()
    if(area){
        res.send(area)
    }
    else{
        res.sendStatus(404)
    }
}

module.exports = GetAreas