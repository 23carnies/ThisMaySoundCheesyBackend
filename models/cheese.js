const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cheeseSchema = new Schema ({
    name: String,
    category: {type: String, required: true},
    country: String,
    brand: String,
    color: String,
    firmness: {type: String, required: true},
    mould: Boolean,
    gasHoles: Boolean,
    texture: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Cheese', cheeseSchema)