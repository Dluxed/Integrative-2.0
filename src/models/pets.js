const mongoose = require('mongoose');
const { checkout } = require('../routes');

const petSchema = new mongoose.Schema({
    name: String,
    specie: String,
    characteristics: String,
    specialsignals: String,
    lastLocation: [{ lat: Number, lng: Number }],
    numUser: Number,
    proced: Boolean,
    photo: String,
    completed: Boolean
});

module.exports = mongoose.model('pets', petSchema);