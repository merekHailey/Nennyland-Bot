const Item = require("../../models/ItemSchema")



async function GetItem(req, res){
    let item = await Item.findOne({name: req.params.itemName});
    if(item)
    res.send(item)
    else
    res.sendStatus(404)
}

module.exports = GetItem