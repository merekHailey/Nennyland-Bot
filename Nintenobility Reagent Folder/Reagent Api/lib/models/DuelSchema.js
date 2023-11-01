const mongoose = require('mongoose')

const DuelSchema = new mongoose.Schema({
    challenger: {},
    challengerOdds: Number,
    challenged: {},
    challengedOdds: Number,
    duelistsBet: Number,
    challengerSupporters: [{
        profile: {},
        bet: Number
    }],
    challengedSupporters: [{
        profile: {},
        bet: Number
    }]
})

const Duel = mongoose.model('Duel', DuelSchema);

module.exports = Duel;