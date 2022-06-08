const mongoose = require('mongoose');

const aircraftSchema = require('./aircraftSchema');

module.exports = mongoose.model('Aircraft', aircraftSchema);