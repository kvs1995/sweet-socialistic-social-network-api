//import Thought and Thought models from model file
const { Thought, Thought } = require('../models');
//module.exports = {}
module.export = {
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
    .populate('thoughts')
    .populate('friends')
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
        { id: req.params.userId },
        { $addToSet: { thoughts: thought } },
        { runValidators: true, new: true }
    ))
    .then ((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => res.status(500).json(err));
  }
  // PUT to update a thought by its _id.

  // DELETE to remove a thoguht by its _id. 

  /*////////////////////// /api/thoughts/:thoughtId/reactions/ //////////////////////*/
  // POST to create a creaction stored in a single thought's reactions array field

  // DELETE to pull and remove a reaction by the reaction's reactionId value. 

}
