const Item = require("../../models/ItemSchema")



async function GetItems(req, res){
    let items = await Item.find();
    if(items)
    res.send(items)
    else
    res.sendStatus(404)
}

module.exports = GetItems