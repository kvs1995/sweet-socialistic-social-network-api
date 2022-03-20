// set router to 'express'.Router()
const router = require('express').Router();
 
//set apiRoutes to bring in api folder
const apiRoutes = require('./api')
 
// router middleware to route to api folder
router.use('/api',apiRoutes)

 //router to use in case the wrong route is used!
router.use((req, res) => res.send('Wrong route!'));

//module export
module.exports = router;