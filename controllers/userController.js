// import User and Thought models from the model fikles
const { User, Thought } = require('../models');
//module.export = 
module.exports = {
  // GET all users
  getUsers(req,res) {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
  },
  // GET a single user by its _id and populated thought and friend data
  getSingleUser(req,res) {
    User.findOne({ _id: req.params.userId})
    .select('-__v')
    // .populate('thoughts')
    // .populate('friends')
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
  },
  
  // PUT to update a user by its _id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body }, 
      { runValidators: true, new: true } 
    )
      .then((user) => 
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });  
  },
  // DELETE to remove user by its _id. 
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
/*////////////////////// /api/user/:userId/friends/:friendId/ / //////////////////////*/

  // POST to add a new friend to a user's frend list
  addFriend(req, res) {
    console.log('You are adding a friend!');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // DELETE to remove a friend from a user's friend list. 
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friend: { friendId: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

}
  