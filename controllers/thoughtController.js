//import Thought and Thought models from model file
const { User, Thought } = require('../models');
//module.exports = {}
module.exports = {
  //GET to get all thoughts
  getThoughts(req,res) {
    Thought.find()
    .populate('reactions')
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
  },

  //GET to get a single thought by its _id.
  getSingleThought(req,res) {
    Thought.findOne({ _id: req.params.thoughtId})
    .select('-__v')
    .then((thought) => 
      !thought 
        ? res.status(404).jon({ message: 'No thought with that Id!'})
        : res.json(thought))
    .catch((err) => res.status(500).json(err));
  },
  //POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  createThought(req,res) {
    Thought.create(req.body)
    .then((thought) => 
      User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: thought } },
        { runValidators: true, new: true }
    ))
    .then ((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => res.status(500).json(err));
  },
  // PUT to update a thought by its _id.

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body }, 
      { new: true } 
    )
      .then((thought) => 
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });  
  },
  // DELETE to remove a thoguht by its _id. 
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought deleted, but no users found',
            })
          : res.json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  /*////////////////////// /api/thoughts/:thoughtId/reactions/ //////////////////////*/
  // POST to create a creaction stored in a single thought's reactions array field
  addReaction(req, res) {
    console.log('You are adding a reaction!');
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // DELETE to pull and remove a reaction by the reaction's reactionId value. 
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtrId },
      { $pull: { reaction: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

}

// module.exports
