const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    name: String,
    lowerName: String,
    twitchUsername: String,
    twitchid: String,
    discordUsername: String,
    discordid: String,
    affinity: Number,
    state: String,
    residence: String,
    duelPartner: {
        name: String,
        id: String
    },
    duelObjId: String,
    inventory: {
        equipped: {
            headgear: {},
            torso: {},
            handgear: {},
            footwear: {},
            mainHand: {},
            offHand: {},
        },
        items: [{}]
    },
    timers: {
        duelLimit: Boolean,
        askDuel: Boolean
    },
    land: [String],
})

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;