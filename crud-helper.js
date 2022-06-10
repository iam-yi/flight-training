// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Aircraft = require('./models/aircraft');
const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, order;
let users, orders;