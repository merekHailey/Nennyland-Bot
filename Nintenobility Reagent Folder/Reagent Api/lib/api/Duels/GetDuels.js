const Duel = require("../../models/DuelSchema");


async function GetDuels(req, res){
    let duels = Duel.find()

    if(!duels){
        res.send(null)
    }
    else{
        res.send(duels);
    }
}

module.exports = GetDuels