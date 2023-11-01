const Quest = require("../../models/QuestSchema")


async function DeleteQuest(req, res){
    let quest = Quest.findOne();

    quest.deleteOne();

    res.send(quest);
}

module.exports = DeleteQuest