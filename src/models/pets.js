const mongoose = require('mongoose');
const { checkout } = require('../routes');

const petSchema = new mongoose.Schema({
    name: String,
    characteristics: String,
    specialsignals: String,
    lastLocation: [{ x: Number, y: Number }],
    numUser: Number,
    proced: Boolean,
    photo: String,
    completed: Boolean
});

module.exports = mongoose.model('pets', petSchema);