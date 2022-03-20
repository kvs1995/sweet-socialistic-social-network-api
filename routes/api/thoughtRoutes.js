//import router = express().Rouer()
const router = require('express').Router();
//import the controllers made fro teh user
const { getThoughts , getSingleThought, createThought , updateThought } = require('../../controllers/thoughtController');

//create the routes

/*///////  /api/thoughts/ ///////*/ 
  // .get Get Thoughts, .post Create Thought
router.route('/').get(getThoughts).post(createThought);

/*///////  /api/users/:thoughtId ///////*/ 
router.route('/:thoughtId').get(getSingleThought).put(updateThought);

//module exports

module.exports = router;