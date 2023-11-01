const Duel = require("../../models/DuelSchema");


async function GetDuel(req, res){
    let duel = Duel.findOne({ObjectId: req.body.profile.duelObjId})

    if(!duel){
        res.send(null)
    }
    else{
        res.send(duel);
    }
}

module.exports = GetDuel