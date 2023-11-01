
async function UpdateQuest(req, res){
    let quest = req.body.quest;

    quest.save();
    res.send(quest);
}

module.exports = UpdateQuest