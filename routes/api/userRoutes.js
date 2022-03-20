//import router = express().Rouer()
const router = require('express').Router();
//import the controllers made fro teh user
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController');

//create the routes

/*///////  /api/users/ ///////*/ 
  // .get Get Users, .post Create users
router.route('/').get(getUsers).post(createUser);

/*///////  /api/users/:userId ///////*/ 
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendsId').post(addFriend).delete(deleteFriend);
//module exports

module.exports = router;