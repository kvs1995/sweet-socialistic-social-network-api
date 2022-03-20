// import User and Thought models from the model fikles
const { User, Thought } = require('../models');
//module.export = 
module.export = {
  // GET all users
  getUsers(req,res) {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
  },
  // GET a single user by its _id and populated thought and friend data
  getSingleUser(req,res) {
    User.findOne({ _id: req.params.userId})
    .populate('thoughts')
    .populate('friends')
    .then((user) => 
      !user 
        ? res.status(404).jon({ message: 'No user with that Id!'})
        : res.json(user))
    .catch((err) => res.status(500).json(err));
  },
  // POST a new user
  createUser(req,res) {
    User.create(req.body)
    .then ((dbUserData) => res.json(dbUserData))
    .catch((err) => res.status(500).json(err));
  }
  // PUT to update a user by its _id

  // DELETE to remove user by its _id. 


/*////////////////////// /api/user/:userId/friends/:friendId/ / //////////////////////*/

  // POST to add a new friend to a user's frend list

  // DELETE to remove a friend from a user's friend list. 


}
  