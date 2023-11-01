const mongoose = require('mongoose')

const AreaSchema = new mongoose.Schema({
    name: String,
    areaId: String,
    owner: String,
    ownedSince: Object,
    cost: Number,
    adjacencies: [String],
})

const Area = mongoose.model('Area', AreaSchema);

module.exports = Area;