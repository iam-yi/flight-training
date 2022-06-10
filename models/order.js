const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const aircraftSchema = require('./aircraftSchema');

const lineItemSchema = new Schema ({
    currHrs: {type: Number},
    prevHrs: {type: Number},
    aircraft: aircraftSchema
},{
    toJSON: { virtuals: true}
});

lineItemSchema.virtual('extPrice').get(function() {
    return (this.currHrs - this.prevHrs) * this.aircraft.price;
});
lineItemSchema.virtual('extHrs').get(function() {
    return this.currHrs - this.prevHrs;
});

const orderSchema = new Schema({
    // need user log in to order
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    studentId: {type: String},
    lineItems: [lineItemSchema]
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
    return this.lineItems.reduce((total, aircraft) => total + aircraft.extPrice, 0);
});

orderSchema.virtual('paidHrs').get(function() {
    return this.lineItems.reduce((total, aircraft) => total + aircraft.extHrs,  0);
});

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
})


module.exports = mongoose.model('Order', orderSchema);
