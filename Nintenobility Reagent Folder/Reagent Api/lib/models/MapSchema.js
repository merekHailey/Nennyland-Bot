const mongoose = require('mongoose')

const MapSchema = new mongoose.Schema({
    name: String,
    mapId: String,
    areas: [String],
})

const Map = mongoose.model('Map', MapSchema);

module.exports = Map;