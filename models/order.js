const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema ({
    totalHrs: {type: Number},
    pervHrs: {type: Number},
    aircraft: aircraftSchema
},{
    toJSON: { virtuals: true}
});



const orderSchema = new Schema({
    // need user log in to order
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    lineItems: [lineItemSchema]

}, {
    timestamps: true
});


module.exports = mongoose.model('Order', orderSchema);
