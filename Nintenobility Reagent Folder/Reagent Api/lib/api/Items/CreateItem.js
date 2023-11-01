const Informant = require("../../Informant");
const Item = require("../../models/ItemSchema")



async function CreateItem(req, res){
    let newItem = new Item({
        name: req.body.name,
        type: req.body.type,
        set: req.body.set,
        slot: req.body.slot,
        description:  req.body.description,
        cp:  req.body.cp,
        cpSet:  Math.floor(req.body.cp * 1.5),
        cost:  req.body.cost
    });
    try{
        newItem.save()
        res.send(newItem)
    }
    catch(err){
        Informant.error(err);
        res.send(err)
    }
}

module.exports = CreateItem