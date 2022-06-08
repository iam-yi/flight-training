const { stringToArray } = require('ag-grid-community');

const Schema = require('mongoose').Schema;

const aircraftSchema = new Schema({
    name: {type: stringToArray, required: true},
    price: {type: Number, required: true, default: 0},
}, {
    timestamps: true
});

module.exports = aircraftSchema;