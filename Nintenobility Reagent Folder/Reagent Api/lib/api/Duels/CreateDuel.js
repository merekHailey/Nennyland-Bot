const Duel = require("../../models/DuelSchema")


async function CreateDuel(req, res){
    let duel = new Duel({
        challenger: {
            name: req.body.challenger.name,
            id: req.body.challenger.twitchid
        },
        challenged: {
            name: req.body.challenged.name,
            id: req.body.challenged.twitchid
        },
        duelistsBet: 0,
        challengerSupporters: [],
        challengedSupporters: []
    });

    duel.save();
    res.send(duel);
}

module.exports = CreateDuel