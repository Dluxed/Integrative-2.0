const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: String,
    characteristics: String,
    signals: String,
    lastLocation: [{ x: Number, y: Number }],
    numUser: Number,
    aggressivness: Boolean,
    photo: String
});

module.exports = mongoose.model('pets', petSchema);