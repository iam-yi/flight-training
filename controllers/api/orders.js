const Order = require('../../models/order');

module.exports = {
    saveOrder,
    getAllForUser
}

async function saveOrder(req, res) {
    const orderData = {
        user: req.user._id,
        lineItems: [req.body],
    }
    const newOrder = new Order(orderData);
    await newOrder.save();
    res.json(newOrder);
}

async function getAllForUser(req, res) {
    const orders = await Order.find({user: req.user._id});
    res.json(orders);
}
