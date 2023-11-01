const mongoose = require('mongoose')

const QuestSchema = new mongoose.Schema({

    questingProfiles: [{}],
    state: String
})

const Quest = mongoose.model('Quest', QuestSchema);

module.exports = Quest;