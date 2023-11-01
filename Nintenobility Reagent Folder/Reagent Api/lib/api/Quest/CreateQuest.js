const Quest = require("../../models/QuestSchema")


async function CreateQuest(req, res){
    let newQuest = new Quest({
        questingProfiles: [req.body.profile],
        state: "Ready To Join"
    });
    res.send(newQuest)
}

module.exports = CreateQuest