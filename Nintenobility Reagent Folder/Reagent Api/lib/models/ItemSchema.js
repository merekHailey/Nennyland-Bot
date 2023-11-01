

const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name: String,
    type: String,
    set: String,
    slot: String,
    description: String,
    cp: Number,
    cpSet: Number,
    cost: Number
})

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;