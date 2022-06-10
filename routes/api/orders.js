const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/new', ensureLoggedIn, ordersCtrl.saveOrder);
router.get('/', ensureLoggedIn, ordersCtrl.getAllForUser);


module.exports = router;