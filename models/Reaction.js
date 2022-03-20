//require schema and types from mongoose
const { Schema, model } = require('mongoose');

// reactionSchema define
const reactionSchema = new Schema (
  {
    //reactionId - type: Schema.Types.ObjectId, default: method to create new ObjectId... () => new Types.ObjectId()?
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
  //reactionBody - type: string, required: true, max_length: 280
    reactionBody: {
      type: string,
      required: true, 
      max_length: 280,
    },
  //username - type: string, required: true
    username: {
      type: String, 
      required: true,
    },
  //crea tedAt - type: Date, default: Date.now(), get mehod to reformat the timestamp
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleString(),
    }
  },
  {
  //toJSON
    toJSON: {
      getters:true,
    },
  //id: false (sense this is not a model)
    id: false
  }
);

//module.exports = schema
module.exports = reactionSchema;

