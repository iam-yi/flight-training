const Schema = require('mongoose').Schema;

const aircraftSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true, default: 0},
}, {
    timestamps: true
});

module.exports = aircraftSchema;