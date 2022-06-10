const Order = require('../../models/order');


module.exports = {
    saveOrder
}


async function saveOrder(req, res) {
    const orderData = {
        user: req.user._id,
        lineItems: [req.body],
    }
    const newOrder = new Order(orderData);
    newOrder.save();
}