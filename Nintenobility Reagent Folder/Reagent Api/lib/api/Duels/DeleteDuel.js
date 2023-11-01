const Duel = require("../../models/DuelSchema")


async function DeleteDuel(req, res){
    let duel = Duel.findOne({ObjectId: req.params.duelObjId})

    if(!duel){
        res.send(null)
    }
    else{
        duel.deleteOne();
    }
}

module.exports = DeleteDuel