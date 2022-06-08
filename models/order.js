const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema ({
    totalHrs: {type: Number},
    pervHrs: {type: Number},
    aircraft: aircraftSchema
},{
    toJSON: { virtuals: true}
});

lineItemSchema.virtual('extPrice').get(function() {
    return (this.totalHrs - this.pervHrs) * this.aircraft.price;
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
    timestamps: true,
    toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
    return this.lineItems.reduce((total, aircraft) => total + aircraft.extPrice, 0);
});

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
})


module.exports = mongoose.model('Order', orderSchema);
