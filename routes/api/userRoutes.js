//import router = express().Rouer()
const router = require('express').Router();
//import the controllers made fro teh user
const { getUsers, getSingleUser, createUser, } = require('../../controllers/userController');

//create the routes

/*///////  /api/users/ ///////*/ 
  // .get Get Users, .post Create users
router.route('/').get(getUsers).post(createUser);

/*///////  /api/users/:userId ///////*/ 
router.route('/:userId').get(getSingleUser);

//module exports

module.exports = router;