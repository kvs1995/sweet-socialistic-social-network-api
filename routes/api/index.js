//import router
const router = require('express').Router();

//grab the routes in folder
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes.js');

//middleware for routes
router.use('/users', userRoutes);
router.use('/thoughts')
module.exports = router;

