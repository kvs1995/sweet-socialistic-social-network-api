//require schema nad model from mongoose
const { Schema, model } = require('mongoose');
//require the reactions schema from Reaction.js
const reactionSchema = require('./Reaction')

//schema to create thought model
const thoughtSchema = new Schema (
  //thoughtText - type: string, required: true, min_length:1, max_length:280
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
  //createdAt - type: date, default: Date.now(), getter method to format the timestamp on query
    createdAt: {
      type: String,
      default: Date.now,
      get: (date) => date.toLocaleString(),
    },
  //username - type: string, required: true
    username: {
      type: String, 
      required: true,
    },
  //reactions = reactionSchema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false
  }
);


//declare a virtual, reactionCount that retrieves the length of the thought's reactions array field on the query
  //need to make a function method that returns the length wof the thought's reactions 
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})
// declare Thoughts as a model that uses the thoughtSchema defined above.
const Thought = new model('thought', thoughtSchema)
//export Thought
module.exports = Thought;