const Quest = require("../../models/QuestSchema")

async function GetQuest(req, res){
    let quest = Quest.findOne();

    res.send(quest)
}

module.exports = GetQuest