

async function UpdateDuel(req, res){
    req.body.duel.save();
}

module.exports = UpdateDuel