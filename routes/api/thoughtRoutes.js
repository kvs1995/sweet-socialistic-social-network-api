//import router = express().Rouer()
const router = require('express').Router();
//import the controllers made fro teh user
const { getThoughts , getSingleThought, createThought , updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thoughtController');

//create the routes

/*///////  /api/thoughts/ ///////*/ 
  // .get Get Thoughts, .post Create Thought
router.route('/').get(getThoughts).post(createThought);

/*///////  /api/users/:thoughtId ///////*/ 
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//module exports
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction)
module.exports = router;